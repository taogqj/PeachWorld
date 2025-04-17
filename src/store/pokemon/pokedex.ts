import { defineStore } from "pinia";
import axios from "axios";
import { ElMessage } from 'element-plus'

export const usePokedexStore = defineStore("pokedex", {
  state: () => ({
    pokemonList: [] as any[],
    pokemonListAll: [] as any[],
    pokemonImgList: {} as any[],
    form: {
      city: [],
      nature: "",
      numberName: "",
    },
    loading: false,
  }),
  actions: {
    async fetchPokemonList() {
      try {
        const res = await axios({
          url: "/data/pokemon_list.json",
          method: "get",
        });
        const { nature, city, numberName } = this.form as any;
        // 筛选逻辑
        let filteredList = res.data;
        if (city && city?.length) {
          filteredList = res.data?.filter((pokemon: any) => {
            const matches = [];
            matches.push(city?.includes(pokemon.pokemon_region_en));
            return matches.length > 0 ? matches.every((match) => match) : true;
          });
        }
        let combinedList = filteredList.flatMap(
          (pokemon: { list?: any[] }) => pokemon?.list || []
        );
        if (nature || numberName) {
          combinedList = combinedList?.filter((pokemon: any) => {
            const matches = [];
            if (nature) matches.push(pokemon.types?.includes(nature));
            if (numberName)
              matches.push(
                pokemon.index === numberName || pokemon.name === numberName
              );
            return matches.length > 0 ? matches.every((match) => match) : true;
          });
        }
        this.pokemonListAll = combinedList;
        this.pokemonList = combinedList.slice(0, 20);
      } catch (error) { }
      
    },

    async fetchPokemonDetails(data: any) {
      const name = `${data.index}-${data.name.split("-")[0]}`;
      let pic = new URL(
        `/src/assets/images/pokemon/official/${data.index}-${data.name}.png`,
        import.meta.url
      ).href;
      console.log(data.name);
      if (/undefined/.test(pic)) {
        try {
          const res = await axios({
            url: `/data/details/${name.split("-").slice(0, 2).join("-")}.json`,
            method: "get",
          });
          this.pokemonImgList[data.name] = res.data;
        } catch (error) {}
      }
    },

    clickLoadMore() {
      this.loading = true;
      if (!this.pokemonListAll || this.pokemonListAll.length === 0) {
        ElMessage({
          message: '数据为空，无法加载更多。',
          type: 'warning',
        })
        return;
      }
    
      const currentLength = this.pokemonList.length;
      const nextBatch = this.pokemonListAll.slice(currentLength, currentLength + 20);
    
      if (nextBatch.length === 0) {
        ElMessage({
          message: '没有更多数据可加载。',
          type: 'warning',
        })
        return;
      }
    
      this.pokemonList = [...this.pokemonList, ...nextBatch];
      this.loading = false;
    },
  },
});

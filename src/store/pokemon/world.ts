import { defineStore } from "pinia";
import axios from "axios";

export const useWorldStore = defineStore("world", {
  state: () => ({
    img: [
      { id: "", name: "", url: "", details: "", geography: "", friends: "" },
    ],
  }),
  actions: {
    async fetchPokemonImg() {
      try {
        const res = await axios({
          url: "/data/pokemon_list.json",
          method: "get",
        });
        this.img = res.data?.map((pokemon: any) => {
          const path = pokemon.pokemon_region_en;
          return {
            id: path,
            name: pokemon.pokemon_region_zh,
            url: new URL(
              `/src/assets/images/pokemon/world/preview/${path}.webp`,
              import.meta.url
            ).href,
            details: new URL(
              `/src/assets/images/pokemon/world/${path}.png`,
              import.meta.url
            ).href,
            geography: pokemon.geography,
            friends: pokemon.friends,
          };
        });
      } catch (error) {}
    },
  },
});

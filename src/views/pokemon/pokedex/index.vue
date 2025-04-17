<template>
  <div class="main h-auto px-15 bg-[#0a141e]">
    <div
      :style="style"
      class="h-full bg-center bg-no-repeat relative overflow-hidden main"
    >
      <div class="bg-black p-8">
        <el-form :model="form" label-width="auto">
          <el-form-item label="使用名称或图鉴编号搜索">
            <el-input v-model="form.numberName" />
          </el-form-item>
          <el-form-item label="属性">
            <el-select multiple v-model="form.nature" placeholder="">
              <template #label="{ label, value }">
                <span :style="{ color: AttributeColorData[1][value] }">{{
                  value
                }}</span>
              </template>
              <el-option
                v-for="item in AttributeData[0]"
                :key="item.id"
                :label="item.label"
                :value="item.id"
                class="bg-white"
              >
                <span :style="{ color: AttributeColorData[1][item.label] }">{{
                  item.label
                }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地区">
            <el-checkbox-group v-model="form.city">
              <el-checkbox v-for="item in RegionData[0]" :value="item.id">
                {{ item.label }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <div class="flex justify-center w-full">
              <el-button type="primary" @click="onSubmit">
                搜索
                <el-icon><Search /></el-icon>
              </el-button>
              <el-button>清空</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="my-8 grid grid-cols-4">
        <div
          v-if="pokemonList.length > 0"
          v-for="item in pokemonList"
          :style="{
            backgroundImage: `url(${pokemonBg})`,
            height: '480px',
            backgroundSize: '100% 100%',
          }"
          class="relative mb-4"
        >
          <el-image
            class="absolute w-[68%] left-[16%] top-[6%] h-[45%] p-9"
            fit="fill"
            :src="getImageUrl(`pokemon/official/${item.index}-${item.name}`,item)"
          />
          <div>
            <span
              class="absolute w-[80%] left-[10%] top-[57%] text-[1.6vw] text-[#b4ebff]"
              >{{ item.index }}</span
            >
            <span
              class="absolute w-[80%] left-[10%] top-[62%] text-[2.2vw] text-white"
              >{{ item.name }}</span
            >
          </div>
          <div
            class="absolute w-[80%] left-[10%] bottom-[5%] flex justify-between"
          >
            <el-tag
              v-for="val in item.types"
              :key="val"
              :color="AttributeColorData[1][val]"
              :style="{
                border: '0px',
                boxShadow: `0 0 .25em .03em ${AttributeColorData[1][val]}`,
              }"
              round
              class="w-[45%]"
            >
              <span class="text-white text-[1.2vw]">{{ val }}</span>
            </el-tag>
          </div>
        </div>
        <el-empty
          v-else
          description="没有寻找到宝可梦。用别的条件重新搜索吧。"
        />
      </div>
      <el-button :loading="loading" @click="clickLoadMore" round class="button">加载更多</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, type CSSProperties } from "vue";
import wallImage from "@/assets/images/pokemon/list_bg.jpg";
import pokemonBg from "@/assets/images/pokemon/list_pokemon_bg.png";
import {
  AttributeData,
  RegionData,
  AttributeColorData,
} from "@/constant/pokemon";

import { usePokedexStore } from "@/store/pokemon/pokedex";
import { storeToRefs } from "pinia";
const { form, pokemonList ,pokemonImgList,loading} = storeToRefs(usePokedexStore());
const style: CSSProperties = {
  backgroundImage: `url(${wallImage})`,
  backgroundSize: "100% auto",
};
const { clickLoadMore } = usePokedexStore();

const getPokemonImgList = () => {
  const { fetchPokemonList } = usePokedexStore();
  onMounted(() => {
    fetchPokemonList();
  });
};

// 处理图片路径
const getImageUrl = (path: string, res: any) => {
  const { fetchPokemonDetails } = usePokedexStore();
  const pathArr = path.split("/");
  let pic = new URL(
    `/src/assets/images/${pathArr[0]}/${pathArr[1]}/${pathArr[2]}.png`,
    import.meta.url
  ).href;
  const hasTwoHyphens = pathArr[2].split('-').length === 3;
  if (/undefined/.test(pic)) {
      watch(
        () => pokemonImgList.value,
        (newVal : any) => {
          if (!newVal[res.name]) {
            fetchPokemonDetails(res);
          }
        },
        { immediate: true } // 立即执行一次以确保初始数据处理
      );
      if (res.name === "肯泰罗-帕底亚的样子（火炽种）") {
        pic = new URL(
          `/src/assets/images/${pathArr[0]}/${pathArr[1]}/${pokemonImgList?.value[res.name]?.forms[2].image}`,
          import.meta.url
        ).href;
      }  else if (res.name === "肯泰罗-帕底亚的样子（水澜种）") {
        pic = new URL(
          `/src/assets/images/${pathArr[0]}/${pathArr[1]}/${pokemonImgList?.value[res.name]?.forms[3].image}`,
          import.meta.url
        ).href;
      } else if (hasTwoHyphens) {
        pic = new URL(
          `/src/assets/images/${pathArr[0]}/${pathArr[1]}/${pokemonImgList?.value[res.name]?.forms[1].image}`,
          import.meta.url
        ).href;
      } else {
        pic = new URL(
          `/src/assets/images/${pathArr[0]}/${pathArr[1]}/${pokemonImgList?.value[res.name]?.forms[0].image}`,
          import.meta.url
        ).href;
      }
      return pic;
  }
  return pic;
};

const onSubmit = () => {
  getPokemonImgList();
};

getPokemonImgList();
</script>

<style scoped>
.button {
  width: 80%;
  margin-bottom: 50px;
  background: rgba(0, 0, 0, 0);
  transform: translateX(12%);
  height: 40px;
  font-size: 18px;
}
</style>

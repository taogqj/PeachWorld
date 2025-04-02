/*
 * @Author: peach tao
 * @Description:切换水印颜色
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 16:54:32
 * @FilePath: \warblerJS\src\utils\toogleDark.ts
 */
import { useHomeStore } from "@/store/home/home";
import { watch } from "vue";
import { useRoute } from "vue-router";
import { WaterMarkData } from "@/constant/base";

export function toogleDark() {
  const route = useRoute();
  const { toggleDark } = useHomeStore();
  watch(
    () => route.path,
    (newPath) => {
      if (
        WaterMarkData[0]?.some((item: { id: string }) => item.id === newPath)
      ) {
        toggleDark(false);
      } else {
        toggleDark(true);
      }
    },
    { immediate: true }
  );
}

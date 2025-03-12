/*
 * @Author: peach tao
 * @Description:切换水印颜色
 * @Date: 2021-10-08 14:34:58
 * @LastEditTime: 2021-10-13 16:54:32
 * @FilePath: \warblerJS\src\utils\toogleDark.ts
 */
import { useHomeStore } from "@/store/home/home";
import { onMounted, onUnmounted } from "vue";

export function toogleDark() {
  const { toggleDark } = useHomeStore();
  onMounted(() => {
    toggleDark(true);
  });

  onUnmounted(() => {
    toggleDark(false);
  });
}

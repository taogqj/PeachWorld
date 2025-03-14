import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => ({
    isDark: false,
    activeIndex: "main",
    menu: [
      {
        name: "main",
        path: "/main",
        label: "主页",
        icon: "house",
        url: "Main",
      },
      {
        name: "pokemon",
        label: "宝可梦",
        icon: "SwitchFilled",
        children: [
          {
            name: "world",
            path: "/pokemon/world",
            label: "世界观",
            icon: "MapLocation",
            url: "World",
          },
          {
            name: "pokedex",
            path: "/pokemon/pokedex",
            label: "图鉴",
            icon: "Iphone",
            url: "Pokedex",
          },
        ],
      },
      {
        name: "cruise",
        label: "胜地巡游",
        icon: "Guide",
        children: [
          {
            name: "fatal",
            path: "/game/sokoban",
            label: "致命游戏",
            icon: "Bicycle",
            url: "Fatal",
          },
        ],
      },
      {
        name: "fish",
        label: "摸鱼",
        icon: "ToiletPaper",
        children: [
          {
            name: "wall",
            path: "/game/sokoban",
            label: "鬼打墙",
            icon: "Grid",
            url: "Wall",
          },
        ],
      },
    ],
  }),

  getters: {
    noChildren: (state) => {
      return state.menu.filter((item) => !item.children);
    },
    hasChildren: (state) => {
      return state.menu.filter((item) => item.children);
    },
  },

  actions: {
    toggleDark(val: boolean) {
      this.isDark = val;
    },
    changeActiveIndex(val: string) {
      this.activeIndex = val;
    },
  },
});

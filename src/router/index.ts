import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    redirect: "/main",
    children: [
      {
        path: "main",
        name: "main",
        component: () => import("@/views/main/index.vue"),
      },
      {
        path: "pokemon/world",
        name: "world",
        component: () => import("@/views/pokemon/world/index.vue"),
      },
      {
        path: "pokemon/pokedex",
        name: "pokedex",
        component: () => import("@/views/pokemon/pokedex/index.vue"),
      },
      {
        path: "game/sokoban",
        name: "sokoban",
        component: () => import("@/views/game/sokoban/index.vue"),
      },
      {
        path: "game/water",
        name: "water",
        component: () => import("@/views/game/water/index.vue"),
      },
      {
        path: "game/fruit",
        name: "fruit",
        component: () => import("@/views/game/fruit/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

// 使用全局前置守卫检查页面刷新
router.beforeEach((to, from, next) => {
  // 检查是否为页面刷新（例如，通过检查from.path为空来判断）
  if (from.path === "" && to.path !== "/") {
    next("/"); // 重定向到首页
  } else {
    next(); // 确保调用next()来继续导航过程
  }
});
export default router;

import { createRouter, createWebHistory } from "vue-router";
import MyTable from "@/views/MyTable";
import MyForm from "@/views/MyForm";
const routes = [
  {
    path: "/",
    name: "Form",
    component: MyForm,
    meta: { title: "Моя форма" },
  },
  {
    path: "/table",
    name: "Table",
    component: MyTable,
    meta: { title: "Моя таблица" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
const DEFAULT_TITLE = "Тест";
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;

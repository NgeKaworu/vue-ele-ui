import e2c from "../utils/e2c";

export default [
  {
    path: "/",
    name: "home",
    // icon: {
    //   render: h => <i class="el-icon-delete"></i>
    // },
    icon: e2c(h => <i class="el-icon-s-home"></i>),
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/job",
    name: "Job Word Cloud",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/JobWordCloud.vue")
  }
];

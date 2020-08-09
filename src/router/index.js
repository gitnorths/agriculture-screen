import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/main/home',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/main/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/main/build',
        name: 'build',
        component: () => import('../views/Build.vue'),
      },
      {
        path: '/main/implement',
        name: 'implement',
        component: () => import('../views/Implement.vue'),
      },
    ],
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router

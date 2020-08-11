import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/main/implement',
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
      {
        path: '/main/innovation',
        name: 'innovation',
        component: () => import('../views/Innovation.vue'),
      },
    ],
  },

  {
    path: '/pollutionpre',
    name: 'pollutionpre',
    redirect: '/pollutionpre/fertilizerre',
    component: () => import('../views/pollutionPrevent/PollutionIndex.vue'),
    children: [
      {
        path: '/pollutionpre/fertilizerre',
        name: 'fertilizerre',
        redirect: '/pollutionpre/fertilizerre/fertilizepro',
        component: () =>
          import('../views/pollutionPrevent/FertilizerReduce.vue'),
        children: [
          {
            path: '/pollutionpre/fertilizerre/fertilizepro',
            name: 'fertilizepro',
            component: () =>
              import('../views/pollutionPrevent/fertilizerre/FertilizePro.vue'),
          },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router

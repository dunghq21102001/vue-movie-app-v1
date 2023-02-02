import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Actors from '../views/Actors.vue'
import ActorDetail from '../views/ActorDetail.vue'
export default createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie/:id',
      component: MovieDetail,
      name: 'movie'
    },
    {
      path: '/actors',
      component: Actors,
      name: 'actors'
    },
    {
      path: '/actor/:id',
      component: ActorDetail,
      name: 'actor'
    },
    {
      path: '/about',
      component: () => import('../views/About.vue'),
    }
  ],
})

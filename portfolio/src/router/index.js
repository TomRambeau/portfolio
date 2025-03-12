import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/portfolio/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/portfolio',
      redirect: '/portfolio/home'
    },
    {
      path: '/portfolio/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/portfolio/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/portfolio/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/portfolio/project/:id',
      name: 'project-detail',
      component: () => import('../views/ProjectDetail.vue'),
      props: true
    },
    {
      path: '/portfolio/experience/:id',
      name: 'experience-detail',
      component: () => import('../views/ExperienceDetail.vue'),
      props: true
    },
    {
      path: '/portfolio/hobbies',
      name: 'hobbies',
      component: () => import('../views/Hobbies.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router

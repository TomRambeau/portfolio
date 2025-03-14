import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  ],
  scrollBehavior(to, from, savedPosition) {
    // Si l'utilisateur utilise les boutons back/forward du navigateur
    if (savedPosition) {
      return savedPosition;
    }
    
    // Pour les nouvelles navigations
    return new Promise((resolve) => {
      // Petit délai pour laisser la transition se faire
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' });
      }, 300); // Ajustez ce délai en fonction de la durée de vos transitions
    });
  }
})

export default router

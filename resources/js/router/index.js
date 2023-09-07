import { createWebHistory, createRouter } from "vue-router";
import login from "@/pages/Login.vue";
import Index from "@/pages/Index.vue";
import { store } from '@/stores/userStore';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: login,
    meta: {
      auth: false,
      requiresGuest: true
  }
  },
  {
    path: '/',
    name: 'Index',
    component: Index,
    beforeEnter: checkAuth
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresGuest)) {
    if(isAuthenticated()) {
      next({name: 'Index'})
    }
    else{
      next()
    }
  }
  else{
    next();
  }
});

function checkAuth(to, from, next)
{
  if(isAuthenticated()){
    next();
  } 
  else next('/login');
}

function isAuthenticated()
{
  return store.getters.loggedIn;
}

export default router;
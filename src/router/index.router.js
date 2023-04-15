import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
		{
			path: "/:catchAll(.*)", //redirige todas las rutas despues de la base
			redirect: { name: "Home" },
		},
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue'),
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/login.vue'),
        },
    ]
})

export default router
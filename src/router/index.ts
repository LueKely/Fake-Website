import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useLogInStore } from '@/stores/LogInStore';

import { defineStore } from 'pinia';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/PageView',
			name: 'PageView',
			meta: { requiresAuth: true },
			component: () => import('../views/PageView.vue'),

			children: [
				{
					path: 'Page/:id',
					name: 'PagesView',
					component: () => import('../views/PagesView.vue'),
					props: true,
					beforeEnter(to, from) {
						if (parseInt(to.params.id.toString()) > 12)
							return {
								name: 'NotFound',
							};
					},
				},
			],
		},
		{
			path: '/Search',
			name: 'Search',
			component: () => import('../views/SearchQuery.vue'),
		},
		{
			path: '/LogIn',
			name: 'LogIn',
			component: () => import('../views/LogInUser.vue'),
		},
		{
			path: '/Register',
			name: 'Register',

			component: () => import('../views/RegisterUser.vue'),
		},
		{
			path: '/Create',
			name: 'Create',
			meta: { requiresAuth: true },
			component: () => import('../views/CreateUser.vue'),
		},

		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('../views/NotFound.vue'),
		},
	],
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || { top: 0, behavior: 'smooth' };
	},
});

router.beforeEach((to, from) => {
	const logInStore = useLogInStore();
	logInStore.checkLogInStatus();
	// to and from are both route objects. must call `next`.
	if (to.meta.requiresAuth && logInStore.logInStatus == false) {
		return { name: 'LogIn' };
	}
});
export default router;

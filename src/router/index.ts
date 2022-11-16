import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

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
			component: () => import('../views/PageView.vue'),

			children: [
				{
					path: 'Page/:id',
					name: 'PagesView',
					component: () => import('../views/PagesView.vue'),
					props: true,
					beforeEnter(to, from) {
						console.log('test');

						console.log('hash is' + to.hash);
						console.log('query is' + to.query);

						if (parseInt(to.params.id.toString()) > 12)
							return {
								name: 'NotFound',
								params: { pathMatch: to.path.split('/') },
								query: to.query,
								hash: to.hash,
							};
					},
				},
			],
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
			component: () => import('../views/CreateUser.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('../views/NotFound.vue'),
		},
	],
});

export default router;

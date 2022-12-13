<script setup lang="ts">
	import { RouterLink } from 'vue-router';
</script>

<template>
	<div class="w-screen h-[80vh] bg-neutral-100 flex">
		<div class="w-[40%] h-full p-5 flex items-center justify-center">
			<div>
				<h1 class="font-serif font-bold text-5xl text-neutral-700 my-1">
					Uh-oh Spagehttio's
				</h1>
				<p class="font-sans font-light text-lg text-neutral-500 mb-3 ml-1">
					Looks like whatever you are looking for does not exist..... For now.
				</p>
				<p>
					<router-link
						class="ml-1 mt-2 outline-none py-2 px-4 bg-purple-500 text-neutral-50 font-sans font-bold text-lg rounded-full hover:bg-neutral-100 border-[1px] border-neutral-100 hover:border-purple-500 hover:text-purple-500 transition-all ease-in-out"
						to="/"
						>Home</router-link
					>
				</p>
			</div>
		</div>
		<div class="w-[60%] h-full overflow-hidden">
			<img class="m-auto" src="/public/404.svg" alt="404 not found" />
		</div>
	</div>
</template>

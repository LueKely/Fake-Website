<script setup lang="ts">
	import { RouterLink } from 'vue-router';
</script>

<template>
	<div class="w-screen h-[80vh] bg-neutral-100 flex">
		<div class="w-[40%] h-full p-8 flex items-center justify-center">
			<div>
				<h1 class="font-serif font-bold text-7xl text-neutral-800 my-1">
					Uh-oh Spagehttio's
				</h1>
				<p
					class="font-sans font-light text-xl text-neutral-500 mb-3 mt-4 text-center"
				>
					Looks like whatever you are looking for does not exist..... For now.
				</p>

				<div class="w-full flex items-center mt-6">
					<router-link
						class="mx-auto outline-none py-4 px-9 bg-purple-500 text-neutral-50 font-sans font-bold text-xl rounded-full hover:bg-neutral-100 border-[1px] border-neutral-100 hover:border-purple-500 hover:text-purple-500 transition-all ease-in-out"
						to="/"
						>Home</router-link
					>
				</div>
			</div>
		</div>
		<div class="w-[60%] h-full overflow-hidden">
			<img class="m-auto" src="/public/404.svg" alt="404 not found" />
		</div>
	</div>
</template>

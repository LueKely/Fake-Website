<script setup lang="ts"></script>

<template>
	<div class="flex w-full h-screen border-b-[1px] border-violet-500">
		<!-- Flavour Text -->
		<div
			class="bg-neutral-100 w-2/5 h-9/12 py-4 px-10 flex flex-col items-center"
		>
			<div class="flex flex-col text-gray-900 items-start mt-20">
				<h1 class="text-8xl font-bold">
					Welcome To <span class="text-violet-500 font-bold">Fake Website</span>
				</h1>

				<p class="text-xl w-4/5 font-light mt-5 ml-2">
					A Website Which Is Fake. You can Post, Get, Patch and other stuff you
					can do in a Rest thingy. Built with <b class="">Vite</b>,
					<b> Vue 3</b>, <b> Axios</b>,<b>Tailwind</b> and <b>Pinia</b>.
				</p>
				<div>
					<button
						class="mt-6 ml-3 pb-1 font-base duration-100 bg-violet-500 font-bold text-slate-50 w-36 h-14 text-xl text-center rounded-full transition ease-in hover:bg-neutral-100 hover:text-violet-500 hover:border-2 hover:border-violet-500 active:scale-90"
						@click="$router.push('/about')"
					>
						Start a Tour
					</button>
				</div>
			</div>
		</div>
		<!-- Picture -->

		<div
			class="w-3/5 h-9/12 bg-WaveColor bg-violet-500 flex m-0 bg-right-bottom bg-origin-border"
		>
			<!-- svg  -->
			<div
				class="h-full min-w-[40%] max-w-5/12 bg-wave bg-no-repeat bg-cover"
			></div>
		</div>
	</div>
</template>

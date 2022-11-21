<script setup lang="ts"></script>

<template>
	<div class="flex w-full h-screen">
		<!-- Flavour Text -->
		<div
			class="bg-neutral-100 w-2/5 h-9/12 py-4 px-10 flex flex-col items-center"
		>
			<div class="flex flex-col items-start mt-20">
				<h1 class="text-7xl font-bold">
					Welcome To <span class="text-violet-500 font-bold">Fake Website</span>
				</h1>

				<p class="text-base w-4/5 font-light mt-5 ml-2">
					A Website Which Is Fake. You can Post, Get, Patch and other stuff you
					can do in a Rest thingy. Built with <b>Vite</b>, <b> Vue 3</b>,
					<b> Axios</b>,<b>Tailwind</b> and <b>Pinia</b>.
				</p>
				<div>
					<button
						class="mt-5 ml-2 font-base duration-100 bg-violet-500 font-bold text-slate-50 w-28 h-10 rounded-full transition ease-in hover:bg-neutral-100 hover:text-violet-500 hover:border-2 hover:border-violet-500 active:scale-90"
					>
						Start a Tour
					</button>
				</div>
			</div>
		</div>
		<!-- Picture -->

		<div class="w-3/5 h-9/12 bg-WaveColor flex m-0">
			<!-- svg -->
			<div class="h-full w-2/5 bg-wave bg-no-repeat bg-cover"></div>
		</div>
	</div>
</template>

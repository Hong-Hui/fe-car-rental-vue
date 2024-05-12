<script setup lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { BriefcaseIcon, CheckCircleIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';

	import CTALink from './components/CTALink.vue';
	import NavLink from './components/NavLink.vue';
	import Dropdown from './components/Dropdown.vue';

	const navLinks = [
		{ id: 1, href: '#', html: 'models' },
		{ id: 2, href: '#', html: 'about' },
		{ id: 3, href: '#', html: 'testimonials' },
		{ id: 4, href: '#', html: 'contact' },
	];
</script>

<template>
	<div class="text-text">
		<!-- /* ------------------------------- navigation ------------------------------- */ -->

		<nav class="container mx-auto">
			<div class="flex flex-row items-center justify-between gap-5 p-5">
				<div class="text-lg font-black">Logo</div>

				<!-- /* ---------------------------- navigation links ---------------------------- */ -->

				<ul class="flex flex-row gap-5">
					<li>Home</li>
					<li
						v-for="navLink in navLinks"
						:key="navLink.id">
						<NavLink
							:html="navLink.html"
							:href="navLink.href" />
					</li>
				</ul>

				<!-- /* ----------------------------- authentication ----------------------------- */ -->

				<div class="flex flex-row items-center gap-5">
					<NavLink
						:class="twMerge('px-5 py-2.5')"
						html="login"
						href="#" />
					<CTALink href="#">register</CTALink>
				</div>
			</div>
		</nav>

		<!-- /* ------------------------------ hero section ------------------------------ */ -->

		<section class="container flex flex-row gap-5 p-5 mx-auto h-[600px] w-full items-center justify-evenly">
			<!-- /* ------------------------------ title and cta ----------------------------- */ -->

			<div class="flex flex-col w-full max-w-lg gap-5 p-5">
				<header>
					<h2 class="text-xl">Plan your trip now</h2>
					<h1 class="text-4xl font-extrabold">Save <span class="text-primary">Big</span> with our car rental</h1>
				</header>

				<p class="text-text-light text-balance">To contribute to positive change and achieve our sustainability goals with many extraordinary</p>

				<div class="flex flex-row items-center gap-5 mt-5">
					<CTALink href="#">
						<span class="ml-2">Book Ride</span>
						<CheckCircleIcon class="ml-2 size-5" />
					</CTALink>

					<CTALink
						href="#"
						:class="twMerge('bg-text')">
						<span class="ml-2">Learn More</span>
						<ChevronRightIcon class="ml-2 size-5" />
					</CTALink>
				</div>
			</div>

			<!-- /* ---------------------------------- image --------------------------------- */ -->

			<div class="w-full max-w-3xl p-5">
				<div class="shrink-0 size-full">
					<img
						src="./assets/car-png-yellow.png"
						class="object-cover size-full"
						alt="yellow Audi car" />
				</div>
			</div>
		</section>

		<!-- /* ----------------------------- selection form ----------------------------- */ -->

		<section class="container mx-auto">
			<div class="flex flex-col p-10 rounded bg-primary-light">
				<h2 class="text-3xl font-bold">Book a car</h2>
				<div class="flex flex-col gap-5 mt-10">
					<div class="flex flex-row gap-2.5 items-center">
						<BriefcaseIcon class="size-4" />
						<label for="test1">test1</label>
					</div>
					<Dropdown
						id="1"
						name="test1"
						:options="[
							{ id: 1, name: 'test1', value: '1' },
							{ id: 2, name: 'test2', value: '2' },
							{ id: 3, name: 'test3', value: '3' },
						]" />
				</div>
			</div>
		</section>
	</div>
</template>

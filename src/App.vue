<script setup lang="ts">
	import { twMerge, twJoin } from 'tailwind-merge';
	import {
		BriefcaseIcon,
		CalendarDaysIcon,
		CheckCircleIcon,
		ChevronRightIcon,
		MagnifyingGlassCircleIcon,
		MagnifyingGlassIcon,
		MapPinIcon,
	} from '@heroicons/vue/20/solid';

	import CTALink from './components/CTALink.vue';
	import NavLink from './components/NavLink.vue';
	import ComboBox from './components/ComboBox.vue';
	import BoxWrapper from './components/BoxWrapper.vue';

	type Link = {
		id: number;
		href: string;
		html: string;
	};

	type Option = {
		id: number;
		name: string;
		value: string;
	};

	const navLinks: Link[] = [
		{ id: 1, href: '#', html: 'models' },
		{ id: 2, href: '#', html: 'about' },
		{ id: 3, href: '#', html: 'testimonials' },
		{ id: 4, href: '#', html: 'contact' },
	];

	const carModelOptions: Option[] = [
		{ id: 1, name: 'Mercedes 35', value: '1' },
		{ id: 2, name: 'Mercedes', value: '2' },
		{ id: 3, name: 'VW PassatCC', value: '3' },
		{ id: 4, name: 'BMW 320', value: '4' },
		{ id: 5, name: 'Toyota Camry', value: '5' },
		{ id: 6, name: 'Audi A1 S', value: '6' },
	];

	const pickupPlaceOptions: Option[] = [
		{
			id: 1,
			name: '33 Rue des Acacias, Agadir 80000',
			value: '1',
		},
		{
			id: 2,
			name: '12 Boulevard Moulay Rachid, Essaouira 44000',
			value: '2',
		},
		{
			id: 3,
			name: '98 Avenue Al Massira, Meknes 50000',
			value: '3',
		},
		{
			id: 4,
			name: '7 Rue Ibn Sina, Oujda 60000',
			value: '4',
		},
		{
			id: 5,
			name: '51 Boulevard Mohammed V, Chefchaouen 91000',
			value: '5',
		},
	];

	const dropoffPlaceOptions: Option[] = [
		{
			id: 1,
			name: '24 Rue des Orangers, Marrakech 40000',
			value: '1',
		},
		{
			id: 2,
			name: '15 Avenue Mohamed VI, Tangier 90000',
			value: '2',
		},
		{
			id: 3,
			name: '82 Boulevard Zerktouni, Casablanca 20250',
			value: '3',
		},
		{
			id: 4,
			name: '5 Rue Tarik Ibn Ziad, Fes 30000',
			value: '4',
		},
		{
			id: 5,
			name: '78 Avenue Hassan II, Rabat 10020',
			value: '5',
		},
	];
</script>

<template>
	<div class="text-ink">
		<!-- /* ------------------------------- navigation ------------------------------- */ -->

		<nav class="container mx-auto">
			<div class="flex flex-row items-center justify-between gap-5 p-5">
				<div class="text-2xl font-black">Turbo<span class="text-primary">R</span>entals</div>

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
						:class="twJoin('px-5 py-2.5')"
						html="login"
						href="#" />
					<CTALink
						href="#"
						:class="twJoin('bg-primary')"
						>register</CTALink
					>
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

				<p class="text-ink-light text-balance">To contribute to positive change and achieve our sustainability goals with many extraordinary</p>

				<div class="flex flex-row items-center gap-5 mt-5">
					<CTALink
						href="#"
						:class="twJoin('bg-primary')">
						<span class="ml-2">Book Ride</span>
						<CheckCircleIcon
							aria-hidden="true"
							class="ml-2 size-5" />
					</CTALink>

					<CTALink
						href="#"
						class="">
						<span class="ml-2">Learn More</span>
						<ChevronRightIcon
							aria-hidden="true"
							class="ml-2 size-5" />
					</CTALink>
				</div>
			</div>

			<!-- /* ---------------------------------- image --------------------------------- */ -->

			<div class="w-full max-w-3xl p-5">
				<div class="shrink-0 size-full">
					<img
						src="./assets/car-png-1234.png"
						class="object-cover size-full"
						alt="yellow Audi car" />
				</div>
			</div>
		</section>

		<!-- /* ----------------------------- selection form ----------------------------- */ -->

		<section class="container px-10 mx-auto">
			<div class="flex flex-col p-10 border shadow-md rounded-xl border-ink-lightest">
				<h2 class="text-3xl font-bold">Book a car</h2>
				<div class="flex flex-row justify-between gap-5 mt-5">
					<div class="flex flex-col w-full gap-5 mt-5">
						<div class="flex flex-row gap-2.5 items-center ml-2.5">
							<BriefcaseIcon
								aria-hidden="true"
								class="size-5 text-primary" />
							<label
								class="text-sm font-semibold leading-5"
								for="test1"
								>Select Your Car Type</label
							>
						</div>
						<ComboBox :options="carModelOptions" />
					</div>
					<div class="flex flex-col w-full gap-5 mt-5">
						<div class="flex flex-row gap-2.5 items-center ml-2.5">
							<MapPinIcon
								aria-hidden="true"
								class="size-5 text-primary" />
							<label
								class="text-sm font-semibold leading-5"
								for="test1"
								>Pick-Up</label
							>
						</div>
						<ComboBox :options="pickupPlaceOptions" />
					</div>
					<div class="flex flex-col w-full gap-5 mt-5">
						<div class="flex flex-row gap-2.5 items-center ml-2.5">
							<MapPinIcon
								aria-hidden="true"
								class="size-5 text-primary" />
							<label
								class="text-sm font-semibold leading-5"
								for="test1"
								>Drop-Off</label
							>
						</div>
						<ComboBox :options="dropoffPlaceOptions" />
					</div>
				</div>

				<div class="flex flex-row items-end justify-between gap-5 mt-5">
					<!-- /* --------------------------------- pickup -------------------------------- */ -->
					<div class="flex flex-row items-end w-full gap-5 mt-5">
						<div class="flex flex-col w-full gap-5">
							<div class="flex flex-row gap-2.5 items-center ml-2.5">
								<CalendarDaysIcon
									aria-hidden="true"
									class="size-5 text-primary" />
								<label
									class="text-sm font-semibold leading-5"
									for="test1"
									>Pick-Up</label
								>
							</div>
							<BoxWrapper>
								<input
									type="date"
									id="pickup-date"
									class="w-full py-4 pl-5 pr-2.5 text-sm leading-5 border-none rounded-lg text-ink focus:ring-0 outline-primary" />
							</BoxWrapper>
						</div>
						<BoxWrapper>
							<input
								type="time"
								id="pickup-time"
								class="w-full py-4 pl-5 pr-2.5 text-sm leading-5 border-none rounded-lg text-ink focus:ring-0 outline-primary"
								min="09:00"
								max="18:00"
								value="09:00"
								required />
						</BoxWrapper>
					</div>

					<!-- /* -------------------------------- dropoff -------------------------------- */ -->
					<div class="flex flex-row items-end w-full gap-5 mt-5">
						<div class="flex flex-col w-full gap-5">
							<div class="flex flex-row gap-2.5 items-center ml-2.5">
								<CalendarDaysIcon
									aria-hidden="true"
									class="size-5 text-primary" />
								<label
									class="text-sm font-semibold leading-5"
									for="test1"
									>Drop-Off</label
								>
							</div>
							<BoxWrapper>
								<input
									type="date"
									id="pickup-date"
									class="w-full py-4 pl-5 pr-2.5 text-sm leading-5 border-none rounded-lg text-ink focus:ring-0 outline-primary" />
							</BoxWrapper>
						</div>
						<BoxWrapper>
							<input
								type="time"
								id="pickup-time"
								class="w-full py-4 pl-5 pr-2.5 text-sm leading-5 border-none rounded-lg text-ink focus:ring-0 outline-primary"
								min="09:00"
								max="18:00"
								value="09:00"
								required />
						</BoxWrapper>
					</div>

					<CTALink
						href="#"
						:class="twMerge('bg-primary px-20 mb-1 rounded-md')">
						<span>Search</span>
						<MagnifyingGlassIcon
							class="size-5 ml-2.5"
							aria-hidden="true" />
					</CTALink>
				</div>
			</div>
		</section>
	</div>
</template>

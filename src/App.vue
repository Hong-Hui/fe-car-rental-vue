<script setup lang="ts">
	import { ref } from 'vue';
	import { twMerge, twJoin } from 'tailwind-merge';
	import { BriefcaseIcon, CalendarDaysIcon, CheckCircleIcon, ChevronRightIcon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/vue/20/solid';
	import { ClipboardDocumentCheckIcon, CursorArrowRaysIcon, GlobeEuropeAfricaIcon } from '@heroicons/vue/24/outline';

	import CTALink from './components/CTALink.vue';
	import NavLink from './components/NavLink.vue';
	import ComboBox from './components/ComboBox.vue';
	import BoxWrapper from './components/BoxWrapper.vue';
	import Button from './components/Button.vue';

	import Car1 from './assets/car-png-1234.png';
	import Car2 from './assets/car-png-7533.png';
	import Car3 from './assets/car-png-black.png';
	import Car4 from './assets/car-png-blue.png';
	import Car5 from './assets/car-png-red.png';
	import Car6 from './assets/car-png-yellow.png';

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

	const carModelOptions = [
		{
			id: 1,
			image: Car1,
			name: 'Mercedes-Benz',
			value: '1',
			rentPrice: '44,00',
			details: { model: 'AMG A 35', doors: 4, seats: 5, luggage: '2 Suitcases / 2 Bags', transmission: 'Automatic' },
		},
		{
			id: 2,
			image: Car2,
			name: 'Mercedes',
			value: '2',
			rentPrice: '54,00',
			details: { model: 'AMG A 35', doors: 4, seats: 5, luggage: '2 Suitcases / 2 Bags', transmission: 'Automatic' },
		},
		{
			id: 3,
			image: Car3,
			name: 'VW PassatCC',
			value: '3',
			rentPrice: '50,00',
			details: { model: 'AMG A 35', doors: 4, seats: 5, luggage: '2 Suitcases / 2 Bags', transmission: 'Automatic' },
		},
		{
			id: 4,
			image: Car4,
			name: 'BMW 320',
			value: '4',
			rentPrice: '25,00',
			details: { model: 'AMG A 35', doors: 4, seats: 5, luggage: '2 Suitcases / 2 Bags', transmission: 'Automatic' },
		},
		{
			id: 5,
			image: Car5,
			name: 'Toyota Camry',
			value: '5',
			rentPrice: '58,00',
			details: { model: 'AMG A 35', doors: 4, seats: 5, luggage: '2 Suitcases / 2 Bags', transmission: 'Automatic' },
		},
		{
			id: 6,
			image: Car6,
			name: 'Audi A1 S',
			value: '6',
			rentPrice: '66,00',
			details: { model: 'AMG A 35', doors: 4, seats: 5, luggage: '2 Suitcases / 2 Bags', transmission: 'Automatic' },
		},
	];

	const selectedCarOption = ref(carModelOptions[0]);

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
						:className="twJoin('bg-primary')"
						>register</CTALink
					>
				</div>
			</div>
		</nav>

		<!-- /* ------------------------------ hero section ------------------------------ */ -->

		<section class="container mx-auto">
			<div class="flex flex-row items-center gap-5 p-5 justify-evenly h-[600px] w-full">
				<!-- /* ------------------------------ title and cta ----------------------------- */ -->

				<div class="flex flex-col w-full max-w-lg gap-5 p-5 pl-16">
					<header>
						<h2 class="text-xl capitalize">Plan your trip now</h2>
						<h1 class="text-4xl font-extrabold capitalize">Save <span class="text-primary">Big</span> with our car rental</h1>
					</header>

					<p class="text-ink-light text-balance">To contribute to positive change and achieve our sustainability goals with many extraordinary</p>

					<div class="flex flex-row items-center gap-5 mt-5">
						<CTALink
							href="#"
							:className="twJoin('bg-primary')">
							<span class="ml-2">Book Ride</span>
							<CheckCircleIcon
								aria-hidden="true"
								class="ml-2 size-5" />
						</CTALink>

						<CTALink href="#">
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
			</div>

			<!-- /* ----------------------------- selection form ----------------------------- */ -->

			<div class="flex flex-col p-10 border shadow-md rounded-xl border-ink-lightest">
				<h4 class="text-3xl font-bold">Book a car</h4>
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
						:className="twMerge('bg-primary px-20 mb-1 rounded-md')">
						<span>Search</span>
						<MagnifyingGlassIcon
							class="size-5 ml-2.5"
							aria-hidden="true" />
					</CTALink>
				</div>
			</div>
		</section>

		<!-- /* ------------------------------ steps section ----------------------------- */ -->

		<section class="container mx-auto mt-[150px]">
			<header>
				<h3 class="text-xl font-bold text-center capitalize">Plan your trip now</h3>
				<h2 class="mt-5 text-4xl font-extrabold text-center capitalize">Quick & easy car rental</h2>
			</header>
			<div class="flex flex-row items-center justify-center mt-[100px]">
				<div class="flex flex-col items-center max-w-xs gap-5 p-5">
					<div class="flex items-center justify-center p-5 rounded-full bg-primary size-fit">
						<CursorArrowRaysIcon
							class="size-14"
							aria-hidden="true" />
					</div>
					<div class="text-xl font-bold text-center">Select Car</div>
					<p class="text-sm leading-5 text-center text-ink-light text-balance">
						To contribute to positive change and achieve our sustainability goals with many extraordinary
					</p>
				</div>
				<div>----------</div>
				<div class="flex flex-col items-center max-w-xs gap-5 p-5">
					<div class="flex items-center justify-center p-5 rounded-full bg-primary size-fit">
						<ClipboardDocumentCheckIcon
							class="size-14"
							aria-hidden="true" />
					</div>
					<div class="text-xl font-bold text-center">Contact Operator</div>
					<p class="text-sm leading-5 text-center text-ink-light text-balance">
						To contribute to positive change and achieve our sustainability goals with many extraordinary
					</p>
				</div>
				<div>----------</div>
				<div class="flex flex-col items-center max-w-xs gap-5 p-5">
					<div class="flex items-center justify-center p-5 rounded-full bg-primary size-fit">
						<GlobeEuropeAfricaIcon
							class="size-14"
							aria-hidden="true" />
					</div>
					<div class="text-xl font-bold text-center">Let's Drive</div>
					<p class="leading-5 text-center s text-ink-light text-balance">
						To contribute to positive change and achieve our sustainability goals with many extraordinary
					</p>
				</div>
			</div>
		</section>

		<!-- /* ------------------------- vehicle models section ------------------------- */ -->

		<section class="mx-auto container mt-[150px]">
			<header>
				<h3 class="text-xl font-bold text-center capitalize">Vehicle Models</h3>
				<h2 class="mt-5 text-4xl font-extrabold text-center capitalize">Our rental fleet</h2>
			</header>
			<p class="max-w-md mx-auto mt-10 text-center text-ink-light">
				To contribute to positive change and achieve our sustainability goals with many extraordinary.
			</p>
			<ul class="flex flex-row items-center justify-center max-w-6xl gap-5 mx-auto mt-10">
				<li
					v-for="option in carModelOptions"
					:key="option.id">
					<Button
						@click="selectedCarOption = option"
						type="button"
						:className="['py-5 px-10', option.id == selectedCarOption.id ? twMerge('bg-primary') : '']"
						>{{ option.name }}</Button
					>
				</li>
			</ul>
			<div class="flex flex-row items-center gap-5 h-[600px] justify-evenly">
				<!-- /* -------------------------------- car image ------------------------------- */ -->

				<div class="flex items-center justify-center max-w-3xl p-5 size-full">
					<img
						:src="selectedCarOption.image"
						:alt="selectedCarOption.name"
						class="object-contain size-full shrink-0" />
				</div>

				<!-- /* ------------------------------- car details ------------------------------ */ -->

				<div class="flex items-center justify-center max-w-xl p-5 size-full">
					<div class="flex flex-col gap-5">
						<h2 class="text-5xl font-bold">
							<span class="text-4xl">$</span>{{ selectedCarOption.rentPrice }} <span class="text-xl align-sub">/ Day</span>
						</h2>
						<div class="w-full h-[1px] bg-ink-light" />
						<ul class="flex flex-col gap-5 mt-5">
							<li>
								<div class="flex flex-row items-center gap-2.5">
									<MapPinIcon
										class="size-5"
										aria-hidden="true" />
									<span class="text-ink-light">Model :</span>
									<span class="text-ink-light">{{ selectedCarOption.details.model }}</span>
								</div>
							</li>
							<li>
								<div class="flex flex-row items-center gap-2.5">
									<MapPinIcon
										class="size-5"
										aria-hidden="true" />
									<span class="text-ink-light">Doors :</span>
									<span class="text-ink-light">{{ selectedCarOption.details.doors }}</span>
								</div>
							</li>
							<li>
								<div class="flex flex-row items-center gap-2.5">
									<MapPinIcon
										class="size-5"
										aria-hidden="true" />
									<span class="text-ink-light">Seats :</span>
									<span class="text-ink-light">{{ selectedCarOption.details.seats }}</span>
								</div>
							</li>
							<li>
								<div class="flex flex-row items-center gap-2.5">
									<MapPinIcon
										class="size-5"
										aria-hidden="true" />
									<span class="text-ink-light">Luggage :</span>
									<span class="text-ink-light">{{ selectedCarOption.details.luggage }}</span>
								</div>
							</li>
							<li>
								<div class="flex flex-row items-center gap-2.5">
									<MapPinIcon
										class="size-5"
										aria-hidden="true" />
									<span class="text-ink-light">Transmission :</span>
									<span class="text-ink-light">{{ selectedCarOption.details.transmission }}</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

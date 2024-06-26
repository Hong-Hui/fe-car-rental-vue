<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { Icon } from '@iconify/vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/* ------------------------------- components ------------------------------- */

import CTALink from './components/CTALink.vue';
import NavLink from './components/NavLink.vue';
import ComboBox from './components/ComboBox.vue';
import BoxWrapper from './components/BoxWrapper.vue';
import Button from './components/Button.vue';

/* ---------------------------- image components ---------------------------- */

import Car1 from './assets/SUV1.png';
import Car2 from './assets/SUV2.png';
import Car3 from './assets/SUV3.png';
import Car4 from './assets/SUV4.png';
import Car5 from './assets/SUV5.png';
import Car6 from './assets/SUV6.png';
import Sales from './assets/sales.jpg';
import CarAction from './assets/car-action.png';

/* --------------------------------- ui data -------------------------------- */

interface Link {
	id: number;
	href: string;
	html: string;
}

interface Option {
	id: number;
	name: string;
	value: string;
}

const navLinks: Link[] = [
	{ id: 1, href: '#', html: 'home' },
	{ id: 2, href: '#', html: 'models' },
	{ id: 3, href: '#', html: 'about' },
	{ id: 4, href: '#', html: 'testimonials' },
	{ id: 5, href: '#', html: 'contact' },
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

/* ------------------------------ template refs ----------------------------- */

const heroSection = ref(null);
const heroImage = ref(null);
const heroTitle = ref(null);
const selectionForm = ref(null);

const stepsSection = ref(null);
const step1 = ref(null);
const step2 = ref(null);
const step3 = ref(null);

const vehicleModelsSection = ref(null);
const vehicleModelImage = ref(null);
const vehicleModelDetails = ref(null);

const aboutSection = ref(null);
const aboutText = ref(null);

/* ------------------------------ gsap animations ----------------------------- */

//FIXME - use one function for all animations
const riseUpAnimation = (element: HTMLElement | null) => {
	return {
		scrollTrigger: element,
		opacity: 0,
		y: 100,
		duration: 1,
		ease: 'power1.inOut',
	};
};

const rightFadeAnimation = (element: HTMLElement | null) => {
	return {
		scrollTrigger: element,
		opacity: 0,
		x: 100,
		duration: 1,
		ease: 'power1.inOut',
	};
};

const leftFadeAnimation = (element: HTMLElement | null) => {
	return {
		scrollTrigger: element,
		opacity: 0,
		x: -100,
		duration: 1,
		ease: 'power1.inOut',
	};
};

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);

	gsap.from(heroTitle.value, leftFadeAnimation(heroTitle.value));
	gsap.from(heroImage.value, rightFadeAnimation(heroImage.value));
	gsap.from(selectionForm.value, riseUpAnimation(selectionForm.value));
	gsap.from(stepsSection.value, riseUpAnimation(stepsSection.value));
	gsap.from(step1.value, { scrollTrigger: step1.value, opacity: 0, y: 100, duration: 1, delay: 0.5, ease: 'power1.inOut' });
	gsap.from(step2.value, { scrollTrigger: step1.value, opacity: 0, y: 100, duration: 1, delay: 1, ease: 'power1.inOut' });
	gsap.from(step3.value, { scrollTrigger: step1.value, opacity: 0, y: 100, duration: 1, delay: 1.5, ease: 'power1.inOut' });
	gsap.from(vehicleModelsSection.value, riseUpAnimation(vehicleModelsSection.value));
	gsap.from(vehicleModelImage.value, leftFadeAnimation(vehicleModelImage.value));
	gsap.from(vehicleModelDetails.value, rightFadeAnimation(vehicleModelDetails.value));
	gsap.from(aboutText.value, riseUpAnimation(aboutText.value));
});
</script>
<template>
	<div class="overflow-hidden text-ink">
		<!-- /* ------------------------------- navigation ------------------------------- */ -->
		<nav class="container mx-auto">
			<div class="flex flex-row items-center justify-between gap-5 p-5">
				<div class="text-2xl font-black">Turbo<span class="text-primary">R</span>entals</div>
				<!-- /* ---------------------------- navigation links ---------------------------- */ -->
				<ul class="flex flex-row gap-5">
					<li v-for="navLink in navLinks" :key="navLink.id">
						<NavLink :html="navLink.html" :href="navLink.href" />
					</li>
				</ul>
				<!-- /* ----------------------------- authentication ----------------------------- */ -->
				<div class="flex flex-row items-center gap-5">
					<NavLink :class="twJoin('px-5 py-2.5')" html="login" href="#" />
					<CTALink href="#" :className="twJoin('bg-primary')">register</CTALink>
				</div>
			</div>
		</nav>
		<!-- /* ------------------------------ hero section ------------------------------ */ -->
		<section ref="heroSection" class="container mx-auto">
			<div class="flex flex-row items-center gap-5 p-5 justify-evenly h-[600px] w-full">
				<!-- /* ------------------------------ title and cta ----------------------------- */ -->
				<div ref="heroTitle" class="flex flex-col w-full max-w-lg gap-5 p-5 pl-16">
					<header>
						<h3 class="text-xl capitalize">Plan your trip now</h3>
						<h1 class="text-4xl font-extrabold capitalize">Save <span class="text-primary">Big</span> with our car rental</h1>
					</header>
					<p class="leading-relaxed text-ink-light text-balance"> To contribute to positive change and achieve our sustainability goals with many
						extraordinary </p>
					<div class="flex flex-row items-center gap-5 mt-5">
						<CTALink href="#" :className="twJoin('bg-primary')">
							<span class="ml-2">Book Ride</span>
							<Icon icon="heroicons:check-circle-16-solid" aria-hidden="true" class="ml-2 size-5" />
						</CTALink>
						<CTALink href="#" className="">
							<span class="ml-2">Learn More</span>
							<Icon icon="heroicons:chevron-right-16-solid" aria-hidden="true" class="ml-2 size-5" />
						</CTALink>
					</div>
				</div>
				<!-- /* ---------------------------------- image --------------------------------- */ -->
				<div ref="heroImage" class="w-full max-w-3xl p-5">
					<div class="shrink-0 size-full">
						<img :src="Car6" class="object-cover size-full" alt="SUV car" />
					</div>
				</div>
			</div>
			<!-- /* ----------------------------- selection form ----------------------------- */ -->
			<div ref="selectionForm" class="flex flex-col p-10 border shadow-md rounded-xl border-ink-lightest">
				<h4 class="text-3xl font-bold">Book a car</h4>
				<div class="flex flex-row justify-between gap-5 mt-5">
					<div class="flex flex-col w-full gap-5 mt-5">
						<div class="flex flex-row gap-2.5 items-center ml-2.5">
							<Icon icon="heroicons:swatch-16-solid" aria-hidden="true" class="size-6 text-primary-dark" />
							<label class="text-sm font-semibold leading-5" for="test1">Select Your Car Type</label>
						</div>
						<ComboBox :options="carModelOptions" />
					</div>
					<div class="flex flex-col w-full gap-5 mt-5">
						<div class="flex flex-row gap-2.5 items-center ml-2.5">
							<Icon icon="heroicons:map-pin-16-solid" aria-hidden="true" class="size-6 text-primary-dark" />
							<label class="text-sm font-semibold leading-5" for="test1">Pick-Up</label>
						</div>
						<ComboBox :options="pickupPlaceOptions" />
					</div>
					<div class="flex flex-col w-full gap-5 mt-5">
						<div class="flex flex-row gap-2.5 items-center ml-2.5">
							<Icon icon="heroicons:map-pin-16-solid" aria-hidden="true" class="size-6 text-primary-dark" />
							<label class="text-sm font-semibold leading-5" for="test1">Drop-Off</label>
						</div>
						<ComboBox :options="dropoffPlaceOptions" />
					</div>
				</div>
				<div class="flex flex-row items-end justify-between gap-5 mt-5">
					<!-- /* --------------------------------- pickup -------------------------------- */ -->
					<div class="flex flex-row items-end w-full gap-5 mt-5">
						<div class="flex flex-col w-full gap-5">
							<div class="flex flex-row gap-2.5 items-center ml-2.5">
								<Icon icon="heroicons:calendar-days-16-solid" aria-hidden="true" class="size-6 text-primary-dark" />
								<label class="text-sm font-semibold leading-5" for="test1">Pick-Up</label>
							</div>
							<BoxWrapper>
								<input type="date" id="pickup-date"
									class="w-full py-4 pl-5 pr-2.5 text-sm leading-5 border-none rounded-lg text-ink focus:ring-0 outline-primary" />
							</BoxWrapper>
						</div>
						<BoxWrapper>
							<input type="time" id="pickup-time"
								class="w-full py-4 pl-5 pr-2.5 text-sm leading-5 border-none rounded-lg text-ink focus:ring-0 outline-primary" min="09:00" max="18:00"
								value="09:00" required />
						</BoxWrapper>
					</div>
					<!-- /* -------------------------------- dropoff -------------------------------- */ -->
					<div class="flex flex-row items-end w-full gap-5 mt-5">
						<div class="flex flex-col w-full gap-5">
							<div class="flex flex-row gap-2.5 items-center ml-2.5">
								<Icon icon="heroicons:calendar-days-16-solid" aria-hidden="true" class="size-6 text-primary-dark" />
								<label class="text-sm font-semibold leading-5" for="test1">Drop-Off</label>
							</div>
							<BoxWrapper>
								<input type="date" id="pickup-date"
									class="w-full py-4 pl-5 pr-2.5 text-sm leading-5 border-none rounded-lg text-ink focus:ring-0 outline-primary" />
							</BoxWrapper>
						</div>
						<BoxWrapper>
							<input type="time" id="pickup-time"
								class="w-full py-4 pl-5 pr-2.5 text-sm leading-5 border-none rounded-lg text-ink focus:ring-0 outline-primary" min="09:00" max="18:00"
								value="09:00" required />
						</BoxWrapper>
					</div>
					<CTALink href="#" :className="twMerge('bg-primary px-20 mb-1 rounded-md')">
						<span>Search</span>
						<Icon icon="heroicons:magnifying-glass-16-solid" aria-hidden="true" class="size-5 ml-2.5" />
					</CTALink>
				</div>
			</div>
		</section>
		<!-- /* ------------------------------ steps section ----------------------------- */ -->
		<section ref="stepsSection" class="container mx-auto mt-[150px]">
			<header>
				<h3 class="text-xl font-bold text-center capitalize">Plan your trip now</h3>
				<h2 class="mt-5 text-4xl font-extrabold text-center capitalize">Quick & easy car rental</h2>
			</header>
			<div class="flex flex-row items-center justify-center mt-[100px]">
				<div ref="step1" class="flex flex-col items-center max-w-xs gap-5 p-5">
					<div class="flex items-center justify-center p-5 rounded-full bg-primary size-fit">
						<Icon icon="heroicons:cursor-arrow-rays" aria-hidden="true" class="size-14" />
					</div>
					<div class="text-xl font-bold text-center">Select Car</div>
					<p class="text-sm leading-5 text-center text-ink-light text-balance"> To contribute to positive change and achieve our sustainability goals
						with many extraordinary </p>
				</div>
				<div>----------</div>
				<div ref="step2" class="flex flex-col items-center max-w-xs gap-5 p-5">
					<div class="flex items-center justify-center p-5 rounded-full bg-primary size-fit">
						<Icon icon="heroicons:clipboard-document-check" aria-hidden="true" class="size-14" />
					</div>
					<div class="text-xl font-bold text-center">Contact Operator</div>
					<p class="text-sm leading-5 text-center text-ink-light text-balance"> To contribute to positive change and achieve our sustainability goals
						with many extraordinary </p>
				</div>
				<div>----------</div>
				<div ref="step3" class="flex flex-col items-center max-w-xs gap-5 p-5">
					<div class="flex items-center justify-center p-5 rounded-full bg-primary size-fit">
						<Icon icon="heroicons:globe-europe-africa" aria-hidden="true" class="size-14" />
					</div>
					<div class="text-xl font-bold text-center">Let's Drive</div>
					<p class="leading-5 text-center s text-ink-light text-balance"> To contribute to positive change and achieve our sustainability goals with
						many extraordinary </p>
				</div>
			</div>
		</section>
		<!-- /* ------------------------- vehicle models section ------------------------- */ -->
		<section ref="vehicleModelsSection" class="mx-auto container mt-[150px]">
			<header>
				<h3 class="text-xl font-bold text-center capitalize">Vehicle Models</h3>
				<h2 class="mt-5 text-4xl font-extrabold text-center capitalize">Our rental fleet</h2>
			</header>
			<p class="max-w-md mx-auto mt-10 text-center text-ink-light"> To contribute to positive change and achieve our sustainability goals with many
				extraordinary. </p>
			<ul class="flex flex-row items-center justify-center max-w-6xl gap-5 mx-auto mt-10">
				<li v-for="option in carModelOptions" :key="option.id">
					<Button @click="selectedCarOption = option" type="button"
						:className="['py-5 px-10', option.id == selectedCarOption.id ? twMerge('bg-primary') : '']">{{ option.name }}</Button>
				</li>
			</ul>
			<div class="flex flex-row items-center gap-5 justify-center h-[600px]">
				<!-- /* --------------------------- vehicle model image -------------------------- */ -->
				<div ref="vehicleModelImage" class="flex items-center justify-center max-w-2xl p-5 size-full">
					<img :src="selectedCarOption.image" :alt="selectedCarOption.name" class="object-contain size-full shrink-0" />
				</div>
				<!-- /* -------------------------- vehicle model details ------------------------- */ -->
				<div ref="vehicleModelDetails" class="flex flex-col items-center justify-center max-w-xl p-5 size-full">
					<div class="flex flex-col gap-2.5">
						<div class="text-5xl font-bold">
							<span class="text-4xl">$</span>{{ selectedCarOption.rentPrice }} <span class="text-xl align-sub">/ Day</span>
						</div>
						<div class="w-full h-px bg-ink-light" />
						<ul class="flex flex-col gap-5 mt-5">
							<li>
								<div class="flex flex-row items-center gap-2.5">
									<Icon icon="heroicons:swatch-solid" aria-hidden="true" class="size-6 text-ink-light" />
									<span class="text-ink-light">Model :</span>
									<span class="text-ink-light">{{ selectedCarOption.details.model }}</span>
								</div>
							</li>
							<li>
								<div class="flex flex-row items-center gap-2.5">
									<Icon icon="heroicons:swatch-solid" aria-hidden="true" class="size-6 text-ink-light" />
									<span class="text-ink-light">Doors :</span>
									<span class="text-ink-light">{{ selectedCarOption.details.doors }}</span>
								</div>
							</li>
							<li>
								<div class="flex flex-row items-center gap-2.5">
									<Icon icon="heroicons:swatch-solid" aria-hidden="true" class="size-6 text-ink-light" />
									<span class="text-ink-light">Seats :</span>
									<span class="text-ink-light">{{ selectedCarOption.details.seats }}</span>
								</div>
							</li>
							<li>
								<div class="flex flex-row items-center gap-2.5">
									<Icon icon="heroicons:swatch-solid" aria-hidden="true" class="size-6 text-ink-light" />
									<span class="text-ink-light">Luggage :</span>
									<span class="text-ink-light">{{ selectedCarOption.details.luggage }}</span>
								</div>
							</li>
							<li>
								<div class="flex flex-row items-center gap-2.5">
									<Icon icon="heroicons:swatch-solid" aria-hidden="true" class="size-6 text-ink-light" />
									<span class="text-ink-light">Transmission :</span>
									<span class="text-ink-light">{{ selectedCarOption.details.transmission }}</span>
								</div>
							</li>
						</ul>
					</div>
					<!-- /* ----------------------------------- CTA ---------------------------------- */ -->
					<div class="flex flex-row gap-5 mt-16">
						<CTALink href="#" :className="twMerge('bg-primary')"><span>Book a Ride</span>
							<Icon icon="heroicons:check-circle-16-solid" aria-hidden="true" class="ml-2 size-5" />
						</CTALink>
						<div class="flex flex-row gap-2.5 items-center py-2.5 px-5">
							<Icon icon="heroicons:phone-solid" aria-hidden="true" class="size-6" />
							<span class="font-bold cursor-pointer hover:underline">(212) 498-3400</span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /* ------------------------------ about section ----------------------------- */ -->
		<section ref="aboutSection" class="mx-auto container mt-[150px]">
			<div class="flex flex-row justify-center gap-[100px]">
				<!-- /* ---------------------------------- about image --------------------------------- */ -->
				<div class="relative max-w-md p-5 mb-auto">
					<img :src="Sales" alt="sales" class="object-cover size-full" />
					<!-- /* ------------------------------- play button ------------------------------ */ -->
					<Button type="button" :className="twMerge('absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-primary size-28')">
						<Icon icon="heroicons:play-solid" aria-hidden="true" class="size-10 shrink-0" />
					</Button>
				</div>
				<!-- /* ------------------------------- about text ------------------------------ */ -->
				<div ref="aboutText" class="max-w-xl p-5">
					<header>
						<h3 class="text-xl capitalize">About the Company</h3>
						<h2 class="text-4xl font-extrabold capitalize"> You <span class="text-primary">start</span> the engine<br /> and your adventure begins
						</h2>
					</header>
					<p class="mt-10 leading-relaxed text-ink-light"> Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.
						Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My
						indulged as disposal strongly attended. </p>
					<div class="w-full h-px mt-5 bg-ink-lightest" />
					<!-- /* ----------------------------- company metrics ---------------------------- */ -->
					<div class="flex flex-row items-center justify-between gap-5 mt-10">
						<div class="flex flex-col gap-5">
							<Icon icon="maki:car" aria-hidden="true" class="size-12 text-primary-dark" />
							<div class="flex flex-row items-center gap-5">
								<div class="text-5xl font-semibold">20</div>
								<div class="font-semibold whitespace-wrap text-ink-light">Car Types</div>
							</div>
						</div>
						<div class="text-ink-lightest">|</div>
						<div class="flex flex-col gap-5">
							<Icon icon="maki:building" aria-hidden="true" class="size-12 text-primary-dark" />
							<div class="flex flex-row items-center gap-5">
								<div class="text-5xl font-semibold">85</div>
								<div class="font-semibold whitespace-wrap text-ink-light">Rental Outlets</div>
							</div>
						</div>
						<div class="text-ink-lightest">|</div>
						<div class="flex flex-col gap-5">
							<Icon icon="maki:car-repair" aria-hidden="true" class="size-12 text-primary-dark" />
							<div class="flex flex-row items-center gap-5">
								<div class="text-5xl font-semibold">75</div>
								<div class="font-semibold whitespace-wrap text-ink-light">Repair Shop</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /* --------------------------- car action section --------------------------- */ -->
		<section ref="bookARide" class="mt-[150px]">
			<div class="h-[350px] w-full bg-[url('./assets/car-action.png')] bg-no-repeat bg-ink bg-right bg-blend-difference">
				<div class="flex items-center justify-center w-full h-full mx-auto bg-opacity-40 text-ink-negative bg-ink">
					<div class="container flex flex-row items-center justify-evenly">
						<header class="max-w-3xl">
							<h2 class="text-5xl font-extrabold leading-tight capitalize text-pretty">Save big with out cheap car rental!</h2>
							<h3 class="mt-10 text-xl font-semibold capitalize">Top Airports. Local Suppliers. 24/7 Support.</h3>
						</header>
						<div class="flex items-center justify-center w-1/4">
							<CTALink href="#" :className="twMerge('bg-primary text-base text-ink hover:shadow-ink px-10 py-5')">
								<span>Book Now</span>
								<Icon icon="heroicons:check-circle-16-solid" aria-hidden="true" class="ml-2 size-6" />
							</CTALink>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /* ----------------------------- footer section ----------------------------- */ -->
		<footer class="mx-auto container mt-[150px] mb-5 px-10">
			<div class="grid grid-cols-4 gap-10 place-items-center">
				<!-- /* ---------------------------------- footer: main ---------------------------------- */ -->
				<div class="flex flex-col h-full gap-5">
					<div class="text-2xl font-black">Turbo<span class="text-primary">R</span>entals</div>
					<p class="mt-5 text-balance">Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion.</p>
					<div>
						<div class="flex flex-row gap-2.5 items-center py-2.5">
							<Icon icon="heroicons:phone-solid" aria-hidden="true" class="size-5" />
							<span class="font-medium cursor-pointer hover:underline">(212) 498-3400</span>
						</div>
						<div class="flex flex-row gap-2.5 items-center py-2.5">
							<Icon icon="heroicons:envelope-solid" aria-hidden="true" class="size-5" />
							<span class="font-medium cursor-pointer hover:underline">example@email.com</span>
						</div>
					</div>
				</div>
				<!-- /* ----------------------------- footer: company ---------------------------- */ -->
				<div class="flex flex-col h-full gap-5">
					<div class="text-2xl font-extrabold uppercase">Company</div>
					<ul class="mt-5 flex flex-col gap-2.5">
						<li>
							<a href="#" class="text-lg hover:underline">Paris</a>
						</li>
						<li>
							<a href="#" class="text-lg hover:underline">New York</a>
						</li>
						<li>
							<a href="#" class="text-lg hover:underline">Tokyo</a>
						</li>
						<li>
							<a href="#" class="text-lg hover:underline">Buenos Aires</a>
						</li>
					</ul>
				</div>
				<!-- /* -------------------------- footer: working hours ------------------------- */ -->
				<div class="flex flex-col h-full gap-5">
					<div class="text-2xl font-extrabold uppercase">Working Hours</div>
					<ul class="flex flex-col gap-5 mt-5">
						<li><span class="text-ink-light">Mon - Fri:</span> 09:00AM - 09:00PM</li>
						<li><span class="text-ink-light">Sat:</span> 09:00AM - 07:00PM</li>
						<li><span class="text-ink-light">Sun:</span> Closed</li>
					</ul>
				</div>
				<!-- /* -------------------------- footer: subscriptions ------------------------- */ -->
				<div class="flex flex-col h-full gap-5">
					<div class="text-2xl font-extrabold uppercase">Subscriptions</div>
					<p class="mt-5 text-ink-light">Subscribe your Email address for latest news & updates.</p>
					<BoxWrapper :class="twJoin('mt-5')">
						<input type="text"
							class="w-full bg-ink-negative py-4 px-2.5 text-sm text-center tracking-5 border-none rounded-lg text-ink focus:ring-0 outline-primary"
							placeholder="Enter your Email" />
					</BoxWrapper>
					<Button type="button" :className="twMerge('bg-primary')">Send</Button>
				</div>
			</div>
			<div class="w-full h-px mx-auto mt-16 conatiner bg-ink-lighter"></div>
			<div class="flex flex-row items-center justify-between mt-5 text-sm">
				<div class="text-ink">© 2024 <span class="font-bold">TurboRentals.</span> All Rights Reserved.</div>
				<div class="flex flex-row gap-5">
					<a href="#" class="">
						<Icon icon="akar-icons:facebook-fill" aria-hidden="true" class="size-5" />
					</a>
					<a href="#" class="">
						<Icon icon="akar-icons:youtube-fill" aria-hidden="true" class="size-5" />
					</a>
					<a href="#" class="">
						<Icon icon="akar-icons:linkedin-box-fill" aria-hidden="true" class="size-5" />
					</a>
					<a href="#" class="">
						<Icon icon="akar-icons:x-fill" aria-hidden="true" class="size-5" />
					</a>
				</div>
			</div>
		</footer>
	</div>
</template>

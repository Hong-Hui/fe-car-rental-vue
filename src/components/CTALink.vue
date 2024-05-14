<script setup lang="ts">
	import { computed } from 'vue';
	import { twMerge } from 'tailwind-merge';

	const props = withDefaults(
		defineProps<{
			href: string;
			className: string | string[];
		}>(),
		{
			href: '#',
			className: '',
		}
	);

	const mergedClasses = computed(() =>
		twMerge(
			'flex flex-row items-center px-6 py-3.5 text-sm font-semibold tracking-wide capitalize duration-300 rounded-sm shadow-md justify-between hover:shadow-ink-lighter size-fit',
			props.className
		)
	);
</script>

<template>
	<a
		:href="href"
		:class="mergedClasses"
		><slot
	/></a>
</template>

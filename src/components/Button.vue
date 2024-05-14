<script setup lang="ts">
	import { computed } from 'vue';
	import { twMerge } from 'tailwind-merge';

	const props = defineProps<{
		type: 'button' | 'submit' | 'reset' | undefined;
		class: string;
	}>();

	const mergedClasses = computed(() =>
		twMerge(
			'flex flex-row items-center px-6 py-3.5 text-sm font-semibold tracking-wide capitalize duration-300 rounded-sm shadow-md justify-between hover:shadow-ink-lighter size-fit',
			props.class
		)
	);
</script>

<template>
	<button
		:type="type"
		:class="mergedClasses">
		<slot />
	</button>
</template>

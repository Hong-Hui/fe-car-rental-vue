<script setup lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { computed } from 'vue';

	const props = defineProps<{
		id: string;
		name: string;
		options: Array<Object>;
		class: string;
	}>();

	const mergedClasses = computed(() => {
		twMerge('py-2.5 px-5 text-ink ring-ink-light rounded text-sm ring-2 duration-300 font-semibold', props.class);
	});
</script>

<template>
	<select
		:name="name"
		:id="id"
		:class="mergedClasses">
		<option
			v-for="option in options"
			:key="option.id"
			:value="option.value">
			{{ option.name }}
		</option>
	</select>
</template>

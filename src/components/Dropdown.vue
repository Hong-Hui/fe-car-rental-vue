<script setup lang="ts">
	defineProps<{
		id: string;
		name: string;
		options: Array<Object>;
	}>();
</script>

<template>
	<select
		:name="name"
		:id="id"
		class="py-2.5 px-5 text-text ring-text-light rounded text-sm ring-2 duration-300 font-semibold">
		<option
			v-for="option in options"
			:key="option.id"
			:value="option.value">
			{{ option.name }}
		</option>
	</select>
</template>

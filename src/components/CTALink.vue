<script setup lang="ts">
	defineProps({
		href: String,
	});
</script>

<template>
	<a
		:href="href"
		class="flex flex-row items-center px-6 py-3.5 text-sm font-semibold tracking-wide capitalize duration-300 rounded-sm shadow-md justify-between text-text-negative bg-primary hover:shadow-primary">
		<slot
	/></a>
</template>

<script setup lang="ts">
	defineProps({
		html: String,
		href: String,
	});
</script>

<template>
	<a
		:href="href"
		class="text-sm font-semibold tracking-wide capitalize duration-300 ease-in-out hover:text-primary text-text"
		>{{ html }}</a
	>
</template>

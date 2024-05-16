<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption, TransitionRoot } from '@headlessui/vue';
	import { Icon } from '@iconify/vue';
	import BoxWrapper from './BoxWrapper.vue';

	const props = defineProps<{
		options: Array<Option>;
	}>();

	let selected = ref(props.options[0]);
	let query = ref('');

	let filteredOption = computed(() =>
		query.value === ''
			? props.options
			: props.options.filter((option) => option.name.toLowerCase().replace(/\s+/g, '').includes(query.value.toLowerCase().replace(/\s+/g, '')))
	);
</script>

<template>
	<Combobox v-model="selected">
		<div class="relative mt-1">
			<BoxWrapper>
				<ComboboxInput
					class="w-full py-4 pl-5 pr-10 text-sm leading-5 border-none rounded-lg text-ink focus:ring-0 outline-primary"
					:displayValue="(option) => option.name"
					@change="query = $event.target.value" />
				<ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
					<Icon
						icon="heroicons:chevron-up-down-20-solid"
						class="size-5 text-ink-light" />
				</ComboboxButton>
			</BoxWrapper>
			<TransitionRoot
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				@after-leave="query = ''">
				<ComboboxOptions
					class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-ink-negative max-h-60 ring-1 ring-ink/5 focus:outline-none sm:text-sm">
					<div
						v-if="filteredOption.length === 0 && query !== ''"
						class="relative px-4 py-2 cursor-default select-none text-ink-light">
						Nothing found.
					</div>

					<ComboboxOption
						v-for="option in filteredOption"
						as="template"
						:key="option.id"
						:value="option"
						v-slot="{ selected, active }">
						<li
							class="relative py-2 pl-10 pr-4 cursor-default select-none"
							:class="{
								'bg-primary text-ink-negative': active,
								'text-ink': !active,
							}">
							<span
								class="block truncate"
								:class="{ 'font-medium': selected, 'font-normal': !selected }">
								{{ option.name }}
							</span>
							<span
								v-if="selected"
								class="absolute inset-y-0 left-0 flex items-center pl-3"
								:class="{ 'text-ink-negative': active, 'text-primary': !active }">
								<Icon
									icon="heroicons:check-20-solid"
									class="size-5 shrink-0"
									aria-hidden="true" />
							</span>
						</li>
					</ComboboxOption>
				</ComboboxOptions>
			</TransitionRoot>
		</div>
	</Combobox>
</template>

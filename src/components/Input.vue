<template>
	<input
		type="text"
		:value="props.modelValue"
		:placeholder="props.placeholder"
		@input="
			(event) => {
				handleInput((event.target as HTMLTextAreaElement).value)
			}
		"
	/>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: string | undefined; placeholder?: string }>()
const emits = defineEmits<{
	(e: "update:modelValue", value: string): void
	(e: "input", value: string): void
}>()

const handleInput = (value: string) => {
	emits("update:modelValue", value)
	emits("input", value)
}
</script>

<style lang="scss" scoped>
@import "@/styles/UIInput.scss";
</style>

<template>
	<section class="result">
		<h4 class="result-label">Результаты</h4>

		<ul class="result-list">
			<span v-show="!store.state.filterVal"> Начните поиск </span>

			<span
				v-show="store.state.isLoading && !store.state.items.length"
				class="searching"
			>
				Идет поиск...
				<SVGLoading></SVGLoading>
			</span>

			<span v-show="store.state.filterVal && !store.state.isLoading && !store.state.items.length">
				Ничего не найдено
			</span>

			<li
				v-for="item in store.state.items"
				:key="item.id"
				class="result-item"
				@click="store.state.currentCardId = item.id"
			>
				<img
					class="image"
					src="/public/img_placeholder.png"
					alt="img placeholder"
				/>

				<section
					class="info"
					:class="{
						'is-active': store.state.currentCardId === item.id,
					}"
				>
					<h3 class="info-username">{{ item.username }}</h3>
					<p class="info-email">{{ item.email }}</p>
				</section>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import SVGLoading from "@/SVG/SVGLoading.vue"
import store from "@/store"
</script>

<style lang="scss" scoped>
@import "@/styles/Result.scss";
</style>

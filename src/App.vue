<template>
	<div class="page__container">
		<Header></Header>

		<div class="content__card">
			<div class="card">
				<aside class="card-sidebar">
					<h4 class="label">Поиск сотрудников</h4>

					<Input
						v-model="store.state.filterVal"
						class="filter"
						placeholder="Введите Id или имя"
						@input="
							(value) => {
								store.dispatch('fetchData', value)
							}
						"
					></Input>

					<transition name="error">
						<div
							v-show="store.state.isError"
							class="notification__error"
						>
							Ошибка! Не удалось загрузить список сотрудников.
						</div>
					</transition>

					<Result class="result__component"></Result>
				</aside>

				<div class="card-view__profile">
					<UserInfo></UserInfo>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Input from "@/components/Input.vue"
import Header from "@/components/Header.vue"
import Result from "@/components/Result.vue"
import UserInfo from "@/components/UserInfo.vue"
import store from "@/store"
</script>

<style lang="scss">
@import "@/styles/index.scss";
@import "@/styles/App.scss";
</style>

<template>
	<div class="user__info-container">
		<div
			v-if="store.getters['getSelectedUser']"
			class="user__info"
		>
			<img
				class="image"
				src="/public/img_placeholder.png"
				alt=""
			/>

			<section class="about">
				<h4 class="about-username">{{ store.getters["getSelectedUser"].name }}</h4>

				<span class="about-description">
					<h5>email:</h5>
					<p>{{ store.getters["getSelectedUser"].email }}</p>
				</span>

				<span class="about-description">
					<h5>phone:</h5>
					<p>{{ store.getters["getSelectedUser"].phone }}</p>
				</span>

				<h4 class="about-title">О себе:</h4>

				<span class="about-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</span>
			</section>
		</div>

		<span
			v-else
			class="placeholder-text"
		>
			Выберите сотрудника, чтобы посмотреть его профиль
		</span>
	</div>
</template>

<script setup lang="ts">
import store from "@/store"
</script>

<style lang="scss" scoped>
@import "@/styles/UserInfo.scss";
</style>

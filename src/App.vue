<template>
	<div>
		<AppHeader></AppHeader>
		<div class="app-contents">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";

export default {
	components: { AppHeader },
	created() {},
};
</script>

<style>
@import url("@/css/common.css");
@import url("@/css/reset.css");
</style>

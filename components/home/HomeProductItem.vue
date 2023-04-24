<template>
  <GradientHover :tag="NuxtLink" :to="to" class="home-product-item" :image="image">
    <div class="title">{{ title }}</div>
    <Spacer size="low" />
    <div class="description">{{ description }}</div>
  </GradientHover>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
const props = defineProps<{
  image: string;
  title: string;
  description: string;
  to: string;
}>();
</script>

<style scoped lang="scss">
.title {
  font-size: var(--r-font-xlarge);
  font-weight: bold;
}
.description {
  font-size: var(--r-font-xlarge);
  color: color(text-3);
}
</style>

<template>
  <GradientHover class="home-product-item" image="/images/product-image-2.png">
    <div class="title">some title</div>
    <div class="description">some description</div>
  </GradientHover>
</template>

<script setup lang="ts">
defineProps<{
  image?: string;
}>();
</script>

<template>
  <GradientHover class="home-product-item" image="/images/product-image-2.png">
    <div class="title">Alcor Markets</div>
    <Spacer size="low" />
    <div class="description">Decentralized orderbook markets on WAX, EOS, Proton and Telos</div>
  </GradientHover>
</template>

<script setup lang="ts">
defineProps<{
  image?: string;
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

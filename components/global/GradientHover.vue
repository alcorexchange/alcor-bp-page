<template>
  <div class="gradient-hover">
    <div class="image" v-if="image">
      <img :src="image" alt="" />
    </div>
    <div class="effects"></div>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image?: string;
}>();
const image = useAsset(props.image || "");
</script>

<style scoped lang="scss">
.gradient-hover {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: var(--r-space-4);
  gap: var(--r-space-4);
  background: color(b3);
  border: 1px solid color(border-color);
  border-radius: var(--r-radius-2);
  .image {
    height: 200px;
    img {
      object-fit: contain;
    }
  }
  .effects {
    position: absolute;
    z-index: 0;
  }
  .slot {
    z-index: 2;
  }
}
</style>

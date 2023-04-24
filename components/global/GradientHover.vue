<template>
  <div class="gradient-hover">
    <div class="image" v-if="image">
      <img :src="image" alt="" />
      <div class="image-overlay"></div>
    </div>
    <div class="effects">
      <div class="effect effect-1"></div>
      <div class="effect effect-2"></div>
    </div>
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
  --duration: calc(var(--r-duration) * 2.4);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: var(--r-space-4);
  gap: var(--r-space-4);
  background: color(b3);
  border: 1px solid color(border-color);
  border-radius: var(--r-radius-2);
  cursor: pointer;
  overflow: hidden;
  transition: all var(--duration);
  .image {
    height: 200px;
    position: relative;
    img {
      object-fit: contain;
    }
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, color(b3), transparent);
    }
  }
  .effects {
    z-index: 2;
    pointer-events: none;
    .effect {
      position: absolute;
      width: 298px;
      height: 260px;
      filter: blur(275px);
      opacity: 0;
      transition: all var(--duration);
      &-1 {
        top: 100%;
        left: 100%;
        background: color();
      }
      &-2 {
        top: 100%;
        left: 0;
        transform: translateX(-50%);
        background-color: color(blue);
      }
    }
  }
  .slot {
    position: relative;
    z-index: 4;
  }
  &:hover {
    transform: scale(1.04);
    .effect {
      opacity: 1;
      &-1 {
        top: 0;
        left: 90%;
        transform: translateY(-80%);
      }
    }
  }
}
</style>

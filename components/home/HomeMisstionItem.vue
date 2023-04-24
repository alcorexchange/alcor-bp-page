<template>
  <div class="home-mission-item card">
    <div class="content">
      <slot />
    </div>
    <div class="from">- {{ from }}</div>
    <div class="effect" v-if="hasEffect"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  from?: string;
  hasEffect?: boolean;
}>();
</script>

<style scoped lang="scss">
.home-mission-item {
  background: color(b1);
  position: relative;
  overflow: hidden;
}
.content {
  position: relative;
  z-index: 4;
}
:slotted(.bold) {
  font-weight: bold;
}
:slotted(.yellow) {
  color: color(yellow);
}
.from {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: color(b5);
  font-size: var(--r-font-small);
  z-index: 2;
}
.effect {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  bottom: 100%;
  left: 100%;
  width: 60px;
  height: 60px;
  transform: translate();
  border-radius: 50%;
  filter: blur(50px);
  // Not in variables??
  background: rgb(84, 224, 98);
}
</style>

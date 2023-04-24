<template>
  <BaseButton v-bind="$attrs" :fill="fill" class="alcor-button">
    <slot />
    <template #icon>
      <slot name="icon"></slot>
    </template>
  </BaseButton>
</template>

<script setup lang="ts">
defineProps({
  fill: {
    default: true,
  },
});
</script>

<style scoped lang="scss">
.alcor-button {
  font-size: var(--r-font-small);
  font-weight: 500;
}
</style>

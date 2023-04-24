<template>
  <div :class="['spacer', size]"></div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: "xlow" | "low" | "default" | "high" | "xhigh";
  }>(),
  {
    size: "default",
  }
);
</script>

<style scoped lang="scss">
.spacer {
  &.xlow {
    height: 8px;
  }
  &.low {
    height: 16px;
  }
  &.default {
    height: 40px;
  }
  &.high {
    height: 54px;
  }
  &.xhigh {
    height: 86px;
  }
}
</style>

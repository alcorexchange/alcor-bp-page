<template>
  <div class="home-section-title">
    <div class="home-section-title-inner">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-section-title {
  display: flex;
  justify-content: center;
  padding-bottom: var(--r-space-6);
  &-inner {
    font-size: var(--r-font-xlarge);
    padding: var(--r-space-2);
    min-width: 300px;
    text-align: center;
    border-radius: 80px;
    border: 1px solid color(border-color);
    background: linear-gradient(to bottom, color(b3), transparent);
  }
}
</style>

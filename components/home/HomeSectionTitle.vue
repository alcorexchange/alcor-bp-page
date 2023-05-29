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
    text-align: center;
    border-radius: 80px;
  }
}
</style>

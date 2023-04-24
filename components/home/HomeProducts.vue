<template>
  <div class="home-products main-inner">
    <HomeSectionTitle> Alcor Products </HomeSectionTitle>
    <div class="items">
      <HomeProductItem v-for="item in 4" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-inner {
  max-width: 980px;
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--r-space-5);
}
</style>

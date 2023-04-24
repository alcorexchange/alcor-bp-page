<template>
  <nav class="nav-bar">
    <div class="main-inner">
      <div class="logo">LOGO</div>
      <div class="nav-items">
        <NuxtLink class="item" v-for="item in menuItems" :to="item.to">{{ item.title }}</NuxtLink>
      </div>
      <div class="actions"><AlcorButton fill>Go To Alcor</AlcorButton></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const menuItems = [
  { title: "Products", to: "/" },
  { title: "Servers", to: "/" },
  { title: "Mission", to: "/" },
  { title: "Community", to: "/" },
];
</script>

<style scoped lang="scss">
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 80;
  backdrop-filter: blur(14px);
  background: color(b1, 0.01);
}
.main-inner {
  padding: var(--r-space-3);
  display: flex;
  & > * {
    flex: 1;
  }
  .nav-items {
    white-space: nowrap;
    display: flex;
    align-items: center;
    .item {
      color: color(text);
      padding: var(--r-normal-padding);
      transition: color var(--r-duration);
      &:hover {
        color: color();
      }
    }
  }
  .actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>

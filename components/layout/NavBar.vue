<template>
  <nav class="nav-bar">
    <div class="main-inner">
      <div class="logo" @click="ScrollTo.scrollTo('body')">
        <AlcorLogo />
      </div>
      <div class="nav-items">
        <div class="item" v-for="item in menuItems" @click="ScrollTo.scrollTo(item.to, { offset: -100 })">{{ item.title }}</div>
      </div>
      <div class="actions"><AlcorButton fill href="https://alcor.exchange">Go To Alcor</AlcorButton></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import AlcorLogo from "@/assets/images/alcor-logo.svg?component";
import ScrollTo from "vue-scrollto";
const menuItems = [
  { title: "Products", to: ".home-products" },
  { title: "Servers", to: ".home-servers-container" },
  { title: "Mission", to: ".home-mission" },
  { title: "Community", to: ".home-community" },
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
  .logo {
    cursor: pointer;
  }
  .nav-items {
    white-space: nowrap;
    display: flex;
    align-items: center;
    .item {
      color: color(text);
      padding: var(--r-normal-padding);
      transition: color var(--r-duration);
      cursor: pointer;
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

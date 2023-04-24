<template>
  <nav class="nav-bar">
    <div class="main-inner">
      <div class="logo" @click="onItemClick('body', 0)">
        <AlcorLogo />
      </div>
      <div class="nav-items">
        <div class="item" v-for="item in menuItems" @click="ScrollTo.scrollTo(item.to, { offset: -100 })">{{ item.title }}</div>
      </div>
      <div class="actions"><AlcorButton fill href="https://alcor.exchange">Go To Alcor</AlcorButton></div>
    </div>
  </nav>
  <div class="mobile-only">
    <div class="menu-header">
      <div class="logo" @click="onItemClick('body', 0)">
        <AlcorLogo />
      </div>
      <div class="menu-header-actions">
        <AlcorButton class="to-alcor" fill href="https://alcor.exchange">Go To Alcor</AlcorButton>
        <div class="menu-icon" @click="active = true">MENU</div>
      </div>
    </div>
    <div :class="['menu-underlay', { active }]" @click="active = false"></div>
    <div :class="['menu', { active }]">
      <div class="menu-inner">
        <div class="logo" @click="onItemClick('body', 0)">
          <AlcorLogo />
        </div>
        <div class="menu-items">
          <div class="item" v-for="item in menuItems" @click="onItemClick(item.to)">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
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

const active = ref(false);

const onItemClick = (to: string, offset: number = -100) => {
  if (to) {
    ScrollTo.scrollTo(to, { offset });
  }
  active.value = false;
};
</script>

<style scoped lang="scss">
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 80;
  backdrop-filter: blur(14px);
  background: color(b1, 0.01);
}

.logo {
  cursor: pointer;
  svg {
    width: 120px;
  }
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

.mobile-only {
  display: none;
}

@media only screen and (max-width: 860px) {
  .mobile-only {
    display: block;
    position: sticky;
    top: 0;
    z-index: 80;
  }

  .menu-header {
    position: sticky;
    top: 0;
    z-index: 80;
    backdrop-filter: blur(14px);
    background: color(b1, 0.01);
    display: flex;
    justify-content: space-between;
    gap: var(--r-space-2);
    padding: var(--r-space-2);
  }
  .nav-bar {
    display: none;
  }
  .menu-header-actions {
    display: flex;
    align-items: center;
    gap: var(--r-space-2);
    justify-content: flex-end;
  }
  .menu-icon {
    padding: var(--r-normal-padding);
    cursor: pointer;
    transition: color var(--r-duration);
    &:hover {
      color: color();
    }
  }
  .menu-underlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 82;
    transition: all var(--r-duration);
    opacity: 0;
    pointer-events: none;
    visibility: hidden;

    &.active {
      visibility: visible;
      pointer-events: all;
      opacity: 0.4;
    }
  }
  .menu {
    position: fixed;
    overflow-y: auto;
    top: 0;
    right: -244px;
    width: 240px;
    height: 100%;
    z-index: 84;
    background-color: color(b1);
    transition: all var(--r-duration);

    &.active {
      right: 0;
    }
  }
  .menu-inner {
    padding: var(--r-space-4) var(--r-space-2);
    .logo {
      display: flex;
      justify-content: center;
    }
  }
  .menu-items {
    display: flex;
    flex-direction: column;
    gap: var(--r-space-2);
    padding-top: var(--r-space-5);
    .item {
      cursor: pointer;
      text-align: center;
      padding: var(--r-space-2);
      transition: all var(--r-duration);
      &:hover {
        color: color();
      }
    }
  }
}

@media only screen and (max-width: 660px) {
  .to-alcor,
  .menu-icon {
    padding: var(--r-space-2) !important;
  }
}
</style>

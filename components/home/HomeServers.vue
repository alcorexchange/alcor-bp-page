<template>
  <div class="home-servers-container">
    <div class="home-servers main-inner">
      <HomeSectionTitle> Servers </HomeSectionTitle>
      <div class="items">
        <HomeServerItem class="item" v-for="item in items" v-bind="item" />
      </div>
    </div>
    <EffectLeft class="effect effect-left" />
    <EffectRight class="effect effect-right" />
  </div>
</template>

<script setup lang="ts">
import EffectLeft from "@/assets/images/effect-left.svg?component";
import EffectRight from "@/assets/images/effect-right.svg?component";

const items = Array.from({ length: 3 }, (_, i) => ({
  name: "Hetzner",
  model: `AX101 (${i + 1})`,
  cpu: "AMD Ryzen™ 9 7950X3D",
  ram: "128 GB DDR5",
  disk: "2 x 1.92 TB NVMe SSD",
}));
</script>

<style scoped lang="scss">
.home-servers-container {
  position: relative;
  // overflow: hidden;
}
.main-inner {
  max-width: 980px;
  position: relative;
  z-index: 4;
}
.items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--r-space-5);
  justify-content: center;
}
.effect {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  top: -20%;
  &-left {
    left: 0;
  }
  &-right {
    right: 0;
  }
}

@media only screen and (max-width: 680px) {
  .item {
    width: 100%;
  }
}
</style>

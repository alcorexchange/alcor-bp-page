<template>
  <div class="home-products main-inner">
    <HomeSectionTitle> Alcor Products </HomeSectionTitle>
    <div class="items">
      <HomeProductItem v-for="item in items" v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    image: "/images/product-image-1.png",
    title: "Alcor Swap V2",
    description: "AMM model swapping  and Liquidity pools on WAX, EOS, Proton and Telos",
  },
  {
    image: "/images/product-image-2.png",
    title: "Alcor Markets",
    description: "Decentralized orderbook markets on WAX, EOS, Proton and Telos",
  },
  {
    image: "/images/product-image-3.png",
    title: "IBC Bridge",
    description: "Bridging assets between different chains on WAX, EOS, Telos and UX Network",
  },
  {
    image: "/images/product-image-4.png",
    title: "Alcor NFT Marketplace",
    description: "NFT Marketplace supporting Atomic Assets and Simple Assets on WAX",
  },
];
</script>

<style scoped lang="scss">
.main-inner {
  max-width: 980px;
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--r-space-5);
  border-radius: var(--r-radius-2);
}
</style>

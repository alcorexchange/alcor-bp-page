<template>
  <div class="home-community main-inner">
    <HomeSectionTitle> Community </HomeSectionTitle>
    <div class="items">
      <HomeCommunityItem class="item" v-for="item in items" v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { image: "/images/telegram.png", name: "Telegram", about: "Support & Trading Talks", to: "https://t.me/alcorexchange" },
  { image: "/images/twitter.png", name: "Twitter", about: "Announcements", to: "https://twitter.com/alcorexchange" },
  { image: "/images/medium.png", name: "Medium", about: "Information & News", to: "https://medium.com/@alcorexchange" },
  { image: "/images/github.png", name: "Github", about: "Code & Contribution", to: "https://github.com/avral/alcor-ui" },
  { image: "/images/api.png", name: "API", about: "Alcor API Docs", to: "https://docs.alcor.exchange/" },
];
</script>

<style scoped lang="scss">
.main-inner {
  max-width: 800px;
}
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
}
.item {
  max-width: 240px;
  width: 100%;
}
</style>

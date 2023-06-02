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
  { image: "telegram", name: "Telegram", about: "Support & Trading Talks", to: "https://t.me/alcorexchange" },
  { image: "twitter", name: "Twitter", about: "Announcements", to: "https://twitter.com/alcorexchange" },
  { image: "medium", name: "Medium", about: "Information & News", to: "https://medium.com/@alcorexchange" },
  { image: "github", name: "Github", about: "Code & Contribution", to: "https://github.com/avral/alcor-ui" },
  { image: "api", name: "API", about: "Alcor API Docs", to: "https://docs.alcor.exchange/" },
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

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
  { image: "/images/telegram.png", name: "Telegram", about: "Support & Trading Talks" },
  { image: "/images/twitter.png", name: "Twitter", about: "Announcements" },
  { image: "/images/medium.png", name: "Medium", about: "Information & News" },
  { image: "/images/github.png", name: "Github", about: "Code & Contribution" },
  { image: "/images/api.png", name: "API", about: "Alcor API Docs" },
];
</script>

<style scoped lang="scss">
.main-inner {
  max-width: 740px;
}
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
}
.item {
  min-width: 210px;
}
</style>

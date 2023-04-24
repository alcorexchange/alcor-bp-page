<template>
  <div class="home-community-item card">
    <div class="image">
      <img :src="image" alt="" />
    </div>
    <div class="name">{{ name }}</div>
    <div class="about">{{ about }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  name: string;
  about: string;
}>();

const image = useAsset(props.image);
</script>

<style scoped lang="scss">
.home-community-item {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: var(--r-space-3);
  text-align: center;
  align-items: center;
  transition: all var(--r-duration);
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
}
.image {
  width: 60px;
  height: 60px;
}
.name {
  font-size: var(--r-font-xlarge);
}
.about {
  color: color(text-4);
}
</style>

<template>
  <NuxtLink class="home-community-item card" :to="to">
    <div class="image">
      <Image />
    </div>
    <div class="name">{{ name }}</div>
    <div class="about">{{ about }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  name: string;
  about: string;
  to: string;
}>();

const Image = defineAsyncComponent(() => import(`../../assets/images/${props.image}.svg`));
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
  color: color(text);
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

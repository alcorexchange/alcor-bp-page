<template>
  <div class="dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => (title ? `${title} • Alcor Block Producer` : `Alcor Block Producer`),
});
</script>

<template>
  <div class="home-server-item card">
    <div class="header">
      <div class="server-icon">
        <AlcorIcon name="server" />
      </div>
      <div class="title-container">
        <div class="title-1">{{ name }}</div>
        <div class="title-2">{{ model }}</div>
      </div>
    </div>
    <div class="specs">
      <div class="key-value">
        <div class="key">CPU</div>
        <div class="value">{{ cpu }}</div>
      </div>
      <div class="key-value">
        <div class="key">RAM</div>
        <div class="value">{{ ram }}</div>
      </div>
      <div class="key-value">
        <div class="key">Disk</div>
        <div class="value">{{ disk }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  model: string;
  cpu: string;
  ram: string;
  disk: string;
}>();
</script>

<style scoped lang="scss">
.header {
  display: flex;
  font-size: var(--r-font-xlarge);
  font-weight: bold;
  gap: var(--r-space-2);
  align-items: center;
  padding-bottom: 32px;
  .server-icon {
    color: color();
    width: 48px;
    height: 100%;
  }
  .title-container {
    display: flex;
    flex-direction: column;
  }
}

.specs {
  display: flex;
  flex-direction: column;
  gap: var(--r-space-3);
  .key-value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--r-space-2);
  }
  .key {
    font-size: var(--r-font-large);
    font-weight: bold;
  }
  .value {
    font-size: var(--r-font-small);
    color: color(text-4);
  }
}
</style>

<template>
  <div class="default-layout">
    <NavBar />
    <slot></slot>
    <Footer />
  </div>
</template>

<style lang="scss">
.default-layout {
  min-height: 100vh;
  background: color(b1);
  color: color(text);
}
</style>

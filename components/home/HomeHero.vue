<template>
  <div class="home-hero">
    <div class="main-inner">
      <div class="content">
        <h1>Welcome to Alcor’s Block Producer Page</h1>
        <Spacer size="low" />
        <p class="description">Alcor is the most liquid DEX on WAX and a provider of UI for different tools.</p>
        <Spacer />
        <div class="actions-container">
          <div class="actions">
            <AlcorButton @click="ScrollTo.scrollTo('.home-products', { offset: -100 })">See Products</AlcorButton>
            <AlcorButton textStyle :fill="false" class="servers" @click="ScrollTo.scrollTo('.home-servers-container', { offset: -100 })">
              See Servers
              <template #icon>
                <AlcorIcon name="server" class="icon" />
              </template>
            </AlcorButton>
          </div>
        </div>
      </div>
      <div class="background">
        <div class="video">
          <video autoplay loop muted>
            <source src="@/assets/hero_video.webm" type="" />
          </video>
        </div>
        <div class="effects">
          <div class="effect effect-1"></div>
          <div class="effect effect-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ScrollTo from "vue-scrollto";
</script>

<style scoped lang="scss">
.main-inner {
  min-height: 600px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  position: relative;
}
.content {
  position: relative;
  z-index: 4;
}
h1 {
  font-size: var(--r-font-xxlarge);
}
.description {
  font-size: var(--r-font-xlarge);
  max-width: 400px;
}
.actions-container {
  display: flex;
}
.actions {
  display: flex;
  align-items: center;
  padding: var(--r-space-2);
  background: #212121;
  border: 1px solid #333333;
  border-radius: var(--r-radius-2);
  gap: var(--r-space-1);
  :deep(.icon) {
    // width: 16px;
    height: 16px;
  }
  .servers {
    font-weight: 400;
  }
}
.background {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 0;
  right: 0;
  width: 100%;
  .video {
    z-index: 2;
  }
  .effects {
    z-index: 0;
    .effect {
      width: 364px;
      height: 228px;
      position: absolute;
      filter: blur(151px);
      opacity: 0.25;
    }

    .effect-1 {
      top: 140px;
      right: 200px;
      background: color(blue);
    }
    .effect-2 {
      bottom: 70px;
      right: 100px;
      background: color();
    }
  }
}
</style>

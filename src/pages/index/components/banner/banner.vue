<template>
  <section class="banner" id="top">
    <img src="./assets/banner-EN-web.png" alt="" class="hide-xs" v-if="lang === 'en-US'"/>
    <img src="./assets/banner-EN-mobile.png" alt="" class="hide-lg" v-if="lang === 'en-US'"/>
    <img src="./assets/banner-CN-web.png" alt="" class="hide-xs" v-if="lang === 'zh-CN'"/>
    <img src="./assets/banner-CN-mobile.png" alt="" class="hide-lg" v-if="lang === 'zh-CN'"/>
    <a href="#/product"></a>
  </section>
</template>

<script>
  export default {
    name: 'banner',
    data() {
      return {
        lang: localStorage._lang || 'en-US',
      }
    },
  }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
  a {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>

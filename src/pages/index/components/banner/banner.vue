<template>
  <section>
    <swiper v-if="items.length >= 2" class="clearfix" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in items" :key="item.id">
        <img :src="item.slide" alt=""/>
      </swiper-slide>
      <div class="pagination" slot="pagination" v-if="items.length >= 2"></div>
    </swiper>
    <div v-else class="no-swiper">
      <img :src="items[0].slide" alt=""/>
    </div>
  </section>
</template>

<script src="./banner.js"></script>

<style lang="scss" src="./banner.scss"></style>

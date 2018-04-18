<template>
  <div class="container">
    <div class="hd-image">
      <img :src="currentItem" alt="LinkDam"/>
    </div>
    <div class="display-list">
      <swiper class="clearfix" :options="swiperOption" ref="displaySwiper">
        <swiper-slide v-for="item in items" :key="item.id">
          <img :src="item.slide" @click="currentItem = item.slide"/>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script src="./display.js"></script>

<style lang="scss" scoped src="./display.scss"></style>

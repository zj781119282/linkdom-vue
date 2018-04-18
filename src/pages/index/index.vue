<template>
  <div class="wrapper">
    <head-top page="index"/>
    <div class="content">
      <banner/>

      <section class="index-section index-cryption">
        <div class="block-container clearfix">
          <article class="text-right-lg text-center-xs">
            <h2>{{$t('INDEX.CRYPTION_TITLE1')}}</h2>
            <h2>{{$t('INDEX.CRYPTION_TITLE2')}}</h2>
          </article>
          <div class="image-container">
            <img src="./assets/index-cryption.png" alt=""/>
          </div>
        </div>
      </section>

      <section class="index-section cold-hot"></section>

      <foot/>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped src="./index.scss"></style>

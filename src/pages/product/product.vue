<template>
  <div class="wrapper">
    <head-top page="product"/>
    <div class="content">
      <section class="preview">
        <div class="preview-container clearfix">
          <display/>
          <purchase :product="product"/>
        </div>
      </section>

      <section class="details">
        <img src="./assets/prod-assets.png" alt=""/>
        <img src="./assets/prod-coins.png" alt=""/>
        <img src="./assets/prod-multi-address.png" alt=""/>
        <img src="./assets/prod-operation.png" alt=""/>
        <img src="./assets/prod-payment.png" alt=""/>
        <img src="./assets/prod-portable.png" alt=""/>
      </section>

      <foot/>
    </div>
    <loading v-show="!loaded"></loading>
  </div>
</template>

<script src="./product.js"></script>

<style lang="scss" scoped src="./product.scss"></style>

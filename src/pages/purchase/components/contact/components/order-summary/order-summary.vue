<template>
  <div class="order-summary">
    <div class="show-product hide-lg" @click="showProductList = !showProductList">
      <span>{{$t('PURCHASE.CONTACT.SHOW')}}</span>
      <span>$9999.99</span>
    </div>
    <div class="container" v-show="showProductList">
      <div class="product-list">
        <img src="./../../../cart/assets/prod-test1.jpg" alt=""/>
        <div class="name">
          <h3>LinkDam Hardware Cold Wallet</h3>
          <p>Classic</p>
        </div>
        <div class="sum">
          $9999.99
        </div>
      </div>
      <div class="subtotal">
        <p>
          <span>{{$t('PURCHASE.CART.SUBTOTAL')}}</span>
          <span>$9999.99</span>
        </p>
        <p>
          <span>{{$t('PURCHASE.CONTACT.SHIPPING')}}</span>
          <span>$99.99</span>
        </p>
      </div>
      <div class="total">
        <span>{{$t('PURCHASE.CART.TOTAL')}}</span>
        <h3>$9999.99</h3>
      </div>
    </div>
    <loading :part="true" v-show="!loaded"></loading>
  </div>
</template>

<script src="./order-summary.js"></script>

<style lang="scss" scoped src="./order-summary.scss"></style>

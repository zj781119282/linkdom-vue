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
          <h3>链盾安全硬件钱包</h3>
          <p>黑色</p>
        </div>
        <div class="sum">
          ￥{{price}}
        </div>
      </div>
      <div class="subtotal">
        <p>
          <span>{{$t('PURCHASE.CART.QUANTITY')}}</span>
          <span>{{count}}</span>
        </p>
        <p>
          <span>{{$t('PURCHASE.CART.SUBTOTAL')}}</span>
          <span>￥{{subtotal}}</span>
        </p>
        <p>
          <span>{{$t('PURCHASE.CONTACT.SHIPPING')}}</span>
          <span>￥{{shipping}}</span>
        </p>
      </div>
      <div class="total">
        <span>{{$t('PURCHASE.CART.TOTAL')}}</span>
        <h3>￥{{sum}}</h3>
      </div>
    </div>
    <loading :part="true" v-show="!loaded"></loading>
  </div>
</template>

<script src="./order-summary.js"></script>

<style lang="scss" scoped src="./order-summary.scss"></style>

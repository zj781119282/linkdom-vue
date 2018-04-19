<template>
  <div class="container">
    <h2>链盾硬件冷钱包</h2>
    <p class="desc">还没上市</p>
    <div class="choose-color clearfix">
      <span :class="{active: choseColor === 0}" @click="choseColor = 0">Classic</span>
      <span :class="{active: choseColor === 1}" @click="choseColor = 1">Golden</span>
    </div>
    <p class="price">$9999.99</p>
    <a href="javascript:;" class="purchase-button">{{$t('PRODUCT.PURCHASE.BUY')}}</a>
  </div>
</template>

<script src="./purchase.js"></script>

<style lang="scss" scoped src="./purchase.scss"></style>

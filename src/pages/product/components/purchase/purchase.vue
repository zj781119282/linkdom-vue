<template>
  <div class="container">
    <h2>{{product.title}}</h2>
    <p class="desc">{{product.englishTitle}}</p>
    <div class="choose-color clearfix">
      <span :class="{active: choseColor === index}"
            @click="choseColor = index"
            v-for="(color, index) in Array(product.color)">
        {{color}}
      </span>
    </div>
    <p>
      <span class="price" :class="{line: product.discount != 1}">{{product.price}}</span>
      <span class="discount" v-if="product.discount != 1">{{product.price * product.discount}}</span>
    </p>
    <a href="javascript:;" class="purchase-button" @click="purchase()">
      {{$t('PRODUCT.PURCHASE.BUY')}}
      <loading :part="true" v-if="!loaded"></loading>
    </a>
  </div>
</template>

<script src="./purchase.js"></script>

<style lang="scss" scoped src="./purchase.scss"></style>

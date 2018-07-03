<template>
  <div class="container">
    <h2>{{product.title}}</h2>
    <p class="desc">{{product.englishTitle}}</p>
    <div class="choose-color clearfix">
      <span :class="{active: color === item}"
            @click="changeColor(item)"
            v-for="item in product.color">
        {{item}}
      </span>
    </div>
    <p>
      <span class="price" :class="{line: product.discount != 1}">￥{{product.price}}</span>
      <span class="discount" v-if="product.discount != 1">￥{{product.price * product.discount}}</span>
    </p>
    <a href="javascript:;" class="common-button" @click="purchase()" :disabled="!color">
      {{$t('PRODUCT.PURCHASE.BUY')}}
      <loading :part="true" v-if="!loaded"></loading>
    </a>
  </div>
</template>

<script src="./purchase.js"></script>

<style lang="scss" scoped src="./purchase.scss"></style>

<template>
  <div class="container">
    <h1>{{$t('PURCHASE.CART.TITLE')}}</h1>
    <table cellspacing="0">
      <thead class="hide-xs">
        <tr>
          <th colspan="2" class="tl">{{$t('PURCHASE.CART.PRODUCT')}}</th>
          <th class="tl">{{$t('PURCHASE.CART.PRICE')}}</th>
          <th>{{$t('PURCHASE.CART.QUANTITY')}}</th>
          <th class="tr">{{$t('PURCHASE.CART.TOTAL')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tl">
            <img src="./assets/prod-test1.jpg" alt=""/>
          </td>
          <td class="tl">
            <h3>LinkDam Hardware Cold Wallet</h3>
            <p>Classic</p>
            <a href="javascript:;">{{$t('PURCHASE.CART.REMOVE')}}</a>
          </td>
          <td style="font-weight: bold">
            {{price}}
          </td>
          <td class="tc">
            <a href="javascript:;">{{$t('PURCHASE.CART.REMOVE')}}</a>
            <input type="number" v-model="quantity" class="tc"/>
            <a href="javascript:;">{{$t('PURCHASE.CART.UPDATE')}}</a>
          </td>
          <td class="tr" style="font-weight: bold">
            {{total}}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="bottom">
      <div class="subtotal">
        <span>{{$t('PURCHASE.CART.SUBTOTAL')}}</span>
        <span class="sum">{{total}}</span>
      </div>
      <div class="checkout">
        <a href="javascript:;" class="hide-xs">{{$t('PURCHASE.CART.CONTINUE')}}</a>
        <a href="javascript:;" class="hide-xs">{{$t('PURCHASE.CART.UPDATE')}}</a>
        <a href="javascript:;" class="purchase">{{$t('PURCHASE.CART.CHECKOUT')}}</a>
      </div>
    </div>
  </div>
</template>

<script src="./cart.js"></script>

<style lang="scss" scoped src="./cart.scss"></style>

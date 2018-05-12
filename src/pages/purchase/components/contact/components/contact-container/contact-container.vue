<template>
  <div class="contact-container clearfix">
    <div class="addresses clearfix">
      <div class="address"
           :class="{active: id === item.id}"
           @click="selectAddress(item.id)"
           v-for="item in address">
        <p>
          <span>{{$t('PURCHASE.CONTACT.CTT')}}</span>
          <em>{{item.userName}} {{item.phone}}</em>
        </p>
        <p>
          <span>{{$t('PURCHASE.CONTACT.TO')}}</span>
          <em>{{item.address}},{{item.street}},{{item.city}},{{item.province}},{{item.country}}</em>
        </p>
        <a href="javascript:;" @click="deleteAddress(item.id)">{{$t('PURCHASE.CONTACT.DELETE')}}</a>
      </div>
    </div>
    <div class="others" v-show="showButton">
      <a href="javascript:;" class="switch show" @click="show = true" v-show="!show">+{{$t('PURCHASE.CONTACT.ADD')}}</a>
      <a href="javascript:;" class="switch hide" @click="show = false" v-show="show">-{{$t('PURCHASE.CONTACT.CANCEL')}}</a>
    </div>
    <add-address v-show="show" @added="getAddress"></add-address>
    <a href="javascript:;" class="button" @click="payment" :disabled="!showButton">{{$t('PURCHASE.CONTACT.CONTINUE')}}</a>
    <a href="#/purchase/cart" class="return">{{$t('PURCHASE.CONTACT.BACK')}}</a>
  </div>
</template>

<script src="./contact-container.js"></script>

<style lang="scss" scoped src="./contact-container.scss"></style>

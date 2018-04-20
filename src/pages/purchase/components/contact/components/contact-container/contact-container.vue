<template>
  <div class="contact-container clearfix">
    <div class="container">
      <h3>{{$t('PURCHASE.CONTACT.CONTACT')}}</h3>
      <div class="contact">
        <input-field :title="$t('PURCHASE.CONTACT.EMAIL_PHONE')"/>
      </div>
      <h3>{{$t('PURCHASE.CONTACT.ADDRESS_INFO')}}</h3>
      <div class="name">
        <input-field :title="$t('PURCHASE.CONTACT.NAME')"/>
      </div>
      <div class="address">
        <input-field :title="$t('PURCHASE.CONTACT.ADDRESS')"/>
      </div>
      <div class="postal">
        <input-field :title="$t('PURCHASE.CONTACT.CITY')"/>
        <input-field :title="$t('PURCHASE.CONTACT.Country')"/>
        <input-field :title="$t('PURCHASE.CONTACT.POSTAL')"/>
      </div>
      <a href="javascript:;" class="button">{{$t('PURCHASE.CONTACT.CONTINUE')}}</a>
      <a href="#/purchase/cart" class="return">{{$t('PURCHASE.CONTACT.BACK')}}</a>
    </div>
  </div>
</template>

<script src="./contact-container.js"></script>

<style lang="scss" scoped src="./contact-container.scss"></style>

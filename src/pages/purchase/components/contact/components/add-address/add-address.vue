<template>
  <div class="address-container clearfix">
    <div class="container">
      <div class="add-address">
        <h3>{{$t('PURCHASE.CONTACT.CONTACT')}}</h3>
        <div class="contact">
          <input-field :title="$t('PURCHASE.CONTACT.PHONE')" v-model="phone"/>
        </div>
        <h3>{{$t('PURCHASE.CONTACT.ADDRESS_INFO')}}</h3>
        <div class="name">
          <input-field :title="$t('PURCHASE.CONTACT.NAME')" v-model="userName"/>
        </div>
        <div class="address">
          <input-field :title="$t('PURCHASE.CONTACT.ADDRESS')"v-model="address"/>
        </div>
        <div class="postal">
          <input-field :title="$t('PURCHASE.CONTACT.STREET')"v-model="street"/>
          <input-field :title="$t('PURCHASE.CONTACT.CITY')"v-model="area"/>
          <input-field :title="$t('PURCHASE.CONTACT.PROVINCE')" v-model="province"/>
        </div>
        <input-field :title="$t('PURCHASE.CONTACT.COUNTRY')" v-model="country"/>
        <input-field :title="$t('PURCHASE.CONTACT.POSTAL')" v-model="postal"/>
      </div>
      <a href="javascript:;" class="return add" @click="addAddress">+ {{$t('PURCHASE.CONTACT.ADD')}}</a>
    </div>
  </div>
</template>

<script src="./add-address.js"></script>

<style lang="scss" scoped src="./add-address.scss"></style>

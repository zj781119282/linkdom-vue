<template>
  <div class="container clearfix">
    <div class="dropdown fl hide-xs">
      <dropdown :head="defaultCountry" :list="list" @selected="getSelected"></dropdown>
    </div>
    <div class="country-codes hide-lg" @click="show = true">
      <a href="javascript:;">{{defaultCountry.name}}{{defaultCountry.id}}</a>
      <i></i>
    </div>
    <input type="text" class="fl" v-model="phone"
           v-validate="'required|numeric'" name="phone"
           @input="inputPhone(errors.has('phone'))"
           @blur="inputPhone(errors.has('phone'))"
           :placeholder="$t('LOGIN.SIGNUP.PHONE')"/>
    <country-code :list="list" @selected="getSelected" v-show="show"></country-code>
  </div>
</template>

<script src="./phone-input.js"></script>

<style lang="scss" scoped src="./phone-input.scss"></style>

<style lang="scss">
  .container {
    .dropdown {
      .dropdown-container {
        .dropdown-body {
          width: 420px;
        }
      }
    }
  }
</style>

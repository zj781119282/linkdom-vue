<template>
  <div class="container">
    <login-form :title="$t('LOGIN.FORGET.TITLE')">
      <form class="signin-form">
        <phone-input @phone="getPhone" @selected="getCountryCode"></phone-input>
        <input type="password" id="signup_password" v-model="password" :placeholder="$t('LOGIN.FORGET.NEW_PWD')" @focus="hideErrorBlock()"/>
        <input type="password" id="signup_repassword" v-model="re_password" :placeholder="$t('LOGIN.SIGNUP.RE_PWD')" @focus="hideErrorBlock()"/>
        <phone-captcha :phone="phone"
                       :country-code="countryCode"
                       @captcha="getCaptcha"
                       @get-captcha-error="getCaptchaError"></phone-captcha>
        <a href="javascript:;" class="common-button" @click="confirm()">{{$t('LOGIN.FORGET.CONFIRM')}}</a>
        <p class="error-block" v-show="!!error">{{error}}</p>
      </form>
      <div class="login-other" slot="other">
        <a href="#/login/signin">{{$t('LOGIN.FORGET.BACK')}}</a>
      </div>
    </login-form>
  </div>
</template>

<script src="./forget.js"></script>

<style lang="scss" scoped></style>

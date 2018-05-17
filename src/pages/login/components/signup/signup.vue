<template>
  <div class="container">
    <login-form :title="$t('LOGIN.SIGNUP.TITLE')">
      <form class="signin-form">
        <phone-input @phone="getPhone" @selected="getCountryCode"></phone-input>
        <p class="error-block" v-show="phoneError">{{$t('LOGIN.SIGNUP.ERROR_ACCOUNT')}}</p>
        <phone-captcha :phone="phone"
                       :country-code="countryCode"
                       @captcha="getCaptcha"
                       @get-captcha-error="getCaptchaError">
        </phone-captcha>
        <p class="error-block" v-show="captchaError">{{$t('LOGIN.SIGNUP.ERROR_CAPTCHA')}}</p>
        <input type="password"
               name="password"
               v-validate="'required'"
               v-model="password"
               :placeholder="$t('LOGIN.SIGNUP.PWD')"
               @focus="hideErrorBlock()"/>
        <p class="error-block" v-show="errors.has('password')">{{$t('LOGIN.SIGNUP.ERROR_PWD')}}</p>
        <input type="password"
               name="re_password"
               v-validate="'required'"
               v-model="re_password"
               :placeholder="$t('LOGIN.SIGNUP.RE_PWD')"
               @focus="hideErrorBlock()"
               @keyup="pressEnter($event)"/>
        <p class="error-block" v-show="errors.has('re_password')">{{$t('LOGIN.SIGNUP.ERROR_REPWD')}}</p>
        <a href="javascript:;" class="common-button" @click="signup()">
          {{$t('LOGIN.SIGNUP.TITLE')}}
          <loading :part="true" v-if="!loaded"></loading>
        </a>
        <p class="error-block" v-show="!!error">{{error}}</p>
      </form>
      <div class="login-other" slot="other">
        <span>{{$t('LOGIN.SIGNUP.HAVE')}}</span> <a href="#/login/signin">{{$t('LOGIN.SIGNUP.TO_LOG')}}</a>
      </div>
    </login-form>
  </div>
</template>

<script src="./signup.js"></script>

<style lang="scss" scoped></style>

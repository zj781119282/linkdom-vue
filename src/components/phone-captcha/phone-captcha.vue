<template>
  <div class="container">
    <input type="text"
           name="captcha"
           v-validate="'required'"
           :placeholder="$t('LOGIN.SIGNUP.CAPTCHA')"
           v-model="captcha"
           @input="emitCaptcha(errors.has('captcha'))"
           @blur="emitCaptcha(errors.has('captcha'))"/>
    <a href="javascript:;" @click="getVerifyCode" :disabled="send || !phone">
      {{send ? `${$t('LOGIN.SIGNUP.RE_GET')}(${countdown}s)` : $t('LOGIN.SIGNUP.GET_CAPTCHA')}}
    </a>
  </div>
</template>

<script src="./phone-captcha.js"></script>

<style lang="scss" scoped src="./phone-captcha.scss"></style>

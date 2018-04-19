<template>
  <div class="container">
    <login-form :title="$t('LOGIN.FORGET.TITLE')">
      <form class="signin-form">
        <input type="text" id="signup_account" v-model="account" :placeholder="$t('LOGIN.SIGNIN.ACCOUNT')" @focus="hideErrorBlock()"/>
        <input type="password" id="signup_password" v-model="password" :placeholder="$t('LOGIN.FORGET.NEW_PWD')" @focus="hideErrorBlock()"/>
        <input type="password" id="signup_repassword" v-model="re_password" :placeholder="$t('LOGIN.SIGNUP.RE_PWD')" @focus="hideErrorBlock()"/>
        <input type="text" id="signup_captcha" v-model="captcha" :placeholder="$t('LOGIN.SIGNUP.CAPTCHA')" @focus="hideErrorBlock()"/>
        <input type="text" id="signup_ems" v-model="ems" :placeholder="$t('LOGIN.SIGNUP.EMS')" @focus="hideErrorBlock()"/>
        <a href="javascript:;" class="button" @click="confirm()">{{$t('LOGIN.FORGET.CONFIRM')}}</a>
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

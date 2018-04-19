<template>
  <div class="container">
    <login-form :title="$t('LOGIN.SIGNUP.TITLE')">
      <form class="signin-form">
        <input type="text" id="signup_account" v-model="account" :placeholder="$t('LOGIN.SIGNUP.PHONE')" @focus="hideErrorBlock()"/>
        <input type="text" id="signup_captcha" v-model="captcha" :placeholder="$t('LOGIN.SIGNUP.CAPTCHA')" @focus="hideErrorBlock()"/>
        <input type="text" id="signup_ems" v-model="ems" :placeholder="$t('LOGIN.SIGNUP.EMS')" @focus="hideErrorBlock()"/>
        <input type="password" id="signup_password" v-model="password" :placeholder="$t('LOGIN.SIGNUP.PWD')" @focus="hideErrorBlock()"/>
        <input type="password" id="signup_repassword" v-model="re_password" :placeholder="$t('LOGIN.SIGNUP.RE_PWD')" @focus="hideErrorBlock()"/>
        <a href="javascript:;" class="button" @click="signup()">{{$t('LOGIN.SIGNUP.TITLE')}}</a>
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

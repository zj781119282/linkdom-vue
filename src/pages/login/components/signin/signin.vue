<template>
  <div class="container">
    <login-form :title="$t('LOGIN.SIGNIN.TITLE')">
      <form class="signin-form">
        <phone-input @phone="getPhone" @selected="getCountryCode"></phone-input>
        <input type="password"
               id="signin_password"
               v-model="password"
               @focus="hideErrorBlock()"
               @keyup="pressEnter($event)"
               :placeholder="$t('LOGIN.SIGNIN.PASSWORD')"/>
        <a href="javascript:;" class="button" @click="signin()">{{$t('LOGIN.SIGNIN.TITLE')}}</a>
        <p class="error-block" v-show="!!error">{{error}}</p>
      </form>
      <div class="login-other" slot="other">
        <a href="#/login/forget">{{$t('LOGIN.SIGNIN.FORGET')}}</a><br/>
        <span>{{$t('LOGIN.SIGNIN.NO_ACCOUNT')}}</span> <a href="#/login/signup">{{$t('LOGIN.SIGNIN.TO_REGISTER')}}</a>
      </div>
    </login-form>
  </div>
</template>

<script src="./signin.js"></script>

<style lang="scss" scoped></style>

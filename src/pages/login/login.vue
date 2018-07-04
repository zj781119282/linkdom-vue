<template>
  <div class="wrapper">
    <head-top page="login"/>
    <div class="content">
      <div class="login-container">
        <router-view></router-view>
      </div>
      <foot/>
    </div>
  </div>
</template>

<script src="./login.js"></script>

<style lang="scss" scoped>
  @media only screen and (max-width: 1024px) {
    .login-container {
      padding: 1rem .2rem;
    }
  }

  @media only screen and (min-width: 1025px) {
    .login-container {
      padding: 240px 0;
    }
  }
</style>

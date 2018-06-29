<template>
  <nav class="navbar">
    <div class="nav-container">
      <a href="/" class="nav-logo col-lg-2 col-xs-5">
        <img src="./assets/logo.png" alt="LinkDam" title="LinkDam"/>
      </a>
      <button class="nav-button" :class="{close: showNavList}" @click="showNavList = !showNavList"></button>
      <ul class="nav-list clearfix" :class="{'xs-hide': !showNavList}">
        <li class="index" :class="{active: page === 'index'}">
          <a href="/">{{$t('HEADER.HOME')}}</a>
        </li>
        <li class="product" :class="{active: page === 'product'}">
          <a href="#/product">{{$t('HEADER.PRODUCT')}}</a>
        </li>
        <li class="download" :class="{active: page === 'download'}">
          <a href="#/download">{{$t('HEADER.DOWNLOAD')}}</a>
        </li>
        <!--<li class="help" :class="{active: page === 'help'}">-->
          <!--<a href="#/index">{{$t('HEADER.HELP')}}</a>-->
        <!--</li>-->
        <li class="login" :class="{active: page === 'login'}" v-if="!isLogged">
          <a href="#/login">{{$t('HEADER.LOGIN')}}</a>
        </li>
        <li class="account" @mouseenter="showUserList = true" @mouseleave="showUserList = false" v-else>
          <a href="javascript:;" class="user-name hide-xs">{{$t('HEADER.WELCOME')}}{{account}}</a>
          <ul v-show="showUserList">
            <li class="user-center">{{$t('HEADER.USER')}}</li>
            <li class="logout" @click="logout()">{{$t('HEADER.LOGOUT')}}</li>
          </ul>
        </li>
        <li class="language" @mouseenter="showLanguageList = true" @mouseleave="showLanguageList = false">
          <a href="javascript:;" class="language-list hide-xs">{{currLang}}</a>
          <ul v-show="showLanguageList">
            <li class="switch-language" @click="switchLang('en-US')">English</li>
            <li class="switch-language" @click="switchLang('zh-CN')">简体中文</li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script src="./header.js"></script>

<style lang="scss" src="./header.scss" scoped></style>

<template>
  <footer>
    <div class="container">
      <a href="" class="logo col-lg-3 hide-xs">
        <img src="../header/assets/logo.png" alt="LinkDam" title="LinkDam"/>
      </a>
      <div class="links col-lg-1">
        <a href="#/index">{{$t('HEADER.HOME')}}</a>
        <a href="#/product">{{$t('HEADER.PRODUCT')}}</a>
        <a href="#/index">{{$t('HEADER.DOWNLOAD')}}</a>
        <a href="#/index">{{$t('HEADER.HELP')}}</a>
      </div>
      <div class="contact">
        <p><span>Email:&nbsp;&nbsp;</span><a href="" class="email-color">1234567@linkdam.com</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
 export default {
   name: 'foot',
 }
</script>

<style lang="scss" scoped src="./footer.scss"></style>

<template>
  <section class="purchase-section">
    <h4 class="hide-xs">{{$t('INDEX.PURCHASE.TITLE')}}</h4>
    <div class="btn-group">
      <a href="#/product" class="common-button buy">{{$t('INDEX.PURCHASE.BUY')}}</a>
      <a href="javascript: scrollTo(0, 0);" class="common-button top">{{$t('INDEX.PURCHASE.TOP')}}</a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'purchase',
  }
</script>

<style lang="scss" scoped src="./purchase.scss"></style>

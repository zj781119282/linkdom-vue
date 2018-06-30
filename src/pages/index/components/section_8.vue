<template>
  <section class="product-preview horizontal" id="section_8">
    <div class="product-img hide-xs">
      <img src="./../assets/8_superhard.png" alt="LinkDam"/>
    </div>
    <div class="product-feature">
      <div class="head">
        <div class="number">
          <img src="./../assets/08.png"/>
        </div>
        <div class="feature">
          <p class="en-feature">
            Superhard alloy
          </p>
          <h3 class="cn-feature">
            外壳采用<br class="hide-xs"><strong>超硬合金</strong>
          </h3>
        </div>
      </div>
    </div>
    <div class="product-img hide-lg">
      <img src="./../assets/8_superhard.png" alt="LinkDam"/>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'section_8',
  }
</script>

<style lang="scss" scoped>
  @media only screen and (min-width: 1025px) {
    #section_8 {
      .product-feature {
        margin-left: 30px;
      }
      .product-img {
        width: 710px;
      }
      .others {
        width: 360px;
        margin-left: 200px;
      }
    }
  }
</style>

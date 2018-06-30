<template>
  <section class="product-preview horizontal" id="section_7">
    <div class="product-feature">
      <div class="head">
        <div class="number">
          <img src="./../assets/07.png"/>
        </div>
        <div class="feature">
          <p class="en-feature">
            Never transmit data
          </p>
          <h3 class="cn-feature">
            充电线<br class="hide-xs"/><strong>永不传输数据</strong>
          </h3>
        </div>
      </div>
      <div class="others">
        <p>无有线数据传输，<br class="hide-xs"><span>从通道断绝攻击；</span></p>
      </div>
    </div>
    <div class="product-img">
      <img src="./../assets/7_transmit.png" alt="LinkDam"/>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'section_7',
  }
</script>

<style lang="scss" scoped>
  @media only screen and (min-width: 1025px) {
    #section_7 {
      .product-feature {
        margin-right: 30px;
      }
      .product-img {
        width: 620px;
      }
      .others {
        width: 410px;
        margin-left: 200px;
      }
    }
  }
</style>

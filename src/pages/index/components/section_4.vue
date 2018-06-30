<template>
  <section class="product-preview horizontal" id="section_4">
    <div class="product-img hide-xs">
      <img src="./../assets/4_encryption.png" alt="LinkDam"/>
    </div>
    <div class="product-feature">
      <div class="head">
        <div class="number">
          <img src="./../assets/04.png"/>
        </div>
        <div class="feature">
          <p class="en-feature">
            High encryption
          </p>
          <h3 class="cn-feature">
            <strong>高加密</strong>芯片
          </h3>
        </div>
      </div>
      <div class="others">
        <p>采用国家密码管理局专有的安全芯片；</p>
        <p>拥有芯片<span>攻击防护</span>功能；</p>
      </div>
    </div>
    <div class="product-img hide-lg">
      <img src="./../assets/4_encryption.png" alt="LinkDam"/>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'section_4',
  }
</script>

<style lang="scss" scoped>
  @media only screen and (min-width: 1025px) {
    #section_4 {
      .product-feature {
        margin-left: 30px;
      }
      .others {
        width: 360px;
        margin-left: 200px;
      }
    }
  }
</style>

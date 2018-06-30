<template>
  <section class="product-preview" id="section_11">
    <div class="product-feature">
      <div class="head">
        <div class="number">
          <img src="./../assets/11.png"/>
        </div>
        <div class="feature">
          <p class="en-feature">
            APP
          </p>
          <h3 class="cn-feature">
            <strong>链盾APP</strong>
          </h3>
        </div>
      </div>
      <div class="others">
        <p>必须硬件配合使用，实时监控资产动态；</p>
        <p>非电磁波信道，信息加密传输；</p>
        <p>操作简洁，仅需<span>2步</span>；</p>
      </div>
    </div>
    <div class="product-img">
      <img src="./../assets/11_app.png" alt="LinkDam"/>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'section_11',
  }
</script>

<style lang="scss" scoped>
  #section_11 {
    padding-bottom: 0;
  }

  @media only screen and (min-width: 1025px) {
    #section_11 {
      .product-img {
        width: 720px;
      }
    }
  }
</style>

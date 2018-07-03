<template>
  <section class="product-preview horizontal" id="section_5">
    <div class="product-feature">
      <div class="head">
        <div class="number">
          <img src="./../assets/05.png"/>
        </div>
        <div class="feature">
          <p class="en-feature">
            Attack Self-destruction
          </p>
          <h3 class="cn-feature">
            <strong>攻击自毁的</strong><br class="hide-xs"/>防护功能
          </h3>
        </div>
      </div>
      <div class="others">
        <p>企图<span>破解、</span><span>攻击</span>芯片时，<br class="hide-xs"/>将启动自毁程序，保证安全；</p>
        <p><span>助记词可在新设备找回资产；</span></p>
      </div>
    </div>
    <div class="product-img">
      <img src="./../assets/5_attack.png" alt="LinkDam"/>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'section_5',
  }
</script>

<style lang="scss" scoped>
  #section_5 {
    padding-bottom: 0;
  }

  @media only screen and (min-width: 1025px) {
    #section_5 {
      .product-feature {
        margin-right: 170px;
      }
      .product-img {
        width: 430px;
      }
      .others {
        width: 410px;
        margin-left: 200px;
      }
    }
  }
</style>

<template>
  <div class="container">
    <h1>{{$t('PURCHASE.PAYMENT.TITLE')}}</h1>
    <div class="order-box">
      <p>收货地址: {{address.address}},{{address.street}},{{address.area}},{{address.province}},{{address.country}} </p>
      <p>收货人: {{address.userName}}</p>
      <p>商品名称: {{product.title}}</p>
      <p>订单号: {{order.orderId}}</p>
    </div>
    <div class="payment-group">
      <div class="payment-detail wechat" :class="{active: payMethod == 1}">
        <div class="radio" @click="payMethod = 1">
          <img src="./../../assets/wx.png" alt=""/>
        </div>
        <div class="detail clearfix">
          <div class="img">
            <img src="./../../assets/wx-qrcode.png"/>
          </div>
          <div class="desc">
            <p>1. 扫描二维码汇款给指定账户</p>
            <p>2. 在汇款前在备注信息中添加订单号: {{order.orderId}}</p>
          </div>
        </div>
      </div>
      <div class="payment-detail alipay" :class="{active: payMethod == 2}">
        <div class="radio" @click="payMethod = 2">
          <img src="./../../assets/alipay.png" alt=""/>
        </div>
        <div class="detail clearfix">
          <div class="desc">
            <p>转账账号: linkdam@163.com</p>
            <p>支付金额: 3000</p>
            <p>注: 转账时在备注中加入订单号: {{order.orderId}}</p>
          </div>
        </div>
      </div>
      <div class="payment-detail paypal" :class="{active: payMethod == 3}">
        <div id="paypal-btn" @click="payMethod = 3"></div>
      </div>
    </div>
    <a href="javascript:;" class="common-button">
      {{$t('PURCHASE.PAYMENT.SUCCEED')}}
    </a>
  </div>
</template>

<script src="./payment.js"></script>

<style lang="scss" scoped src="./payment.scss"></style>

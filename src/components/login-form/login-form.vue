<template>
  <div class="form">
    <h1>{{title}}</h1>
    <slot></slot>
    <slot name="other"></slot>
  </div>
</template>

<script src="./login-form.js"></script>

<style lang="scss" scoped src="./login-form.scss"></style>

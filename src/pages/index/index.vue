<template>
  <div class="wrapper">
    <head-top page="index"/>
    <div class="content">
      <banner/>

      <section_1></section_1>
      <section_2></section_2>
      <section_3></section_3>
      <section_4></section_4>
      <section_5></section_5>
      <section_6></section_6>
      <section_7></section_7>
      <section_8></section_8>
      <section_9></section_9>
      <section_10></section_10>
      <section_11></section_11>

      <foot/>
    </div>
    <loading v-show="!loaded"></loading>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" src="./index.scss"></style>

<template>
  <div class="container">
    <ul>
      <li v-for="item in list" @click="getCode(item)">
        <span>{{item.name}}</span>
        <span>{{item.id}}</span>
      </li>
    </ul>
  </div>
</template>

<script src="./country-code.js"></script>

<style lang="scss" scoped src="./country-code.scss"></style>

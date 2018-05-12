<template>
  <div class="dropdown-container" @mouseenter="show = true" @mouseleave="show = false">
    <div class="dropdown-head">
      <span class="ellipsis">{{headData.name}}</span>
      <span >{{headData.id}}</span>
      <i></i>
    </div>
    <ul class="dropdown-body" v-show="show">
      <li v-for="item in list" @click="selectItem(item)">
        <span>{{item.name}}</span>
        <span>{{item.id}}</span>
      </li>
    </ul>
  </div>
</template>

<script src="./dropdown.js"></script>

<style lang="scss" scoped src="./dropdown.scss"></style>

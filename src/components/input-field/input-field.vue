<template>
  <div class="field-container">
    <p>{{title}}</p>
    <input type="text" :value="value" @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script src="./input-field.js"></script>

<style lang="scss" scoped src="./input-field.scss"></style>

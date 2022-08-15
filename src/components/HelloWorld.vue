<template>
  <h1 class="heading">{{ msg }}</h1>
</template>

<script setup>
const msg = 'Hello World !';
</script>

<style lang="scss" scoped>
.heading {
  color: $red;
  font-family: $dm-sans;
  text-align: center;
  padding: 15px;
  letter-spacing: 1px;
}
</style>

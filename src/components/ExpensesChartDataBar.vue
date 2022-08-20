<template>
  <div
    class="expenses-chart-data-bar"
    :style="{ height: `${height}px` }"
  />
</template>

<script setup>
defineProps({
  height: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.expenses-chart-data-bar {
  width: 33px;

  background-color: $red;
  border-radius: 3px;
}
</style>

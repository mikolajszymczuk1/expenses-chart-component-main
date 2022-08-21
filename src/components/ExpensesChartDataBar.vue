<template>
  <div
    class="expenses-chart-data-bar"
    :class="isMax ? 'expenses-chart-data-bar--max' : ''"
    :style="{ height: `${height}px` }"
  />
</template>

<script setup>
defineProps({
  height: {
    type: Number,
    required: true,
  },
  isMax: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.expenses-chart-data-bar {
  width: 30px;

  background-color: $red;
  border-radius: 3px;

  @media screen and (min-width: $sm) {
    width: 33px;
  }

  @media screen and (min-width: $lg) {
    width: 50px;

    border-radius: 5px;
  }

  &--max {
    background-color: $cyan;
  }
}
</style>

<template>
  <img
    src="@/assets/svg/logo.svg"
    alt="Two circles logo image"
    title="Logo"
    :width="width"
    :height="height"
  >
</template>

<script setup>
defineProps({
  width: {
    type: Number,
    default: 60,
  },
  height: {
    type: Number,
    default: 40,
  },
});
</script>

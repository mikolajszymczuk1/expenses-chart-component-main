<template>
  <div class="expenses-chart-header">
    <div class="expenses-chart-header__wrapper">
      <h1 class="expenses-chart-header__balance-title">My balance</h1>
      <h2 class="expenses-chart-header__balance">${{ balance }}</h2>
    </div>

    <LogoIcon />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';

// Balance value
const balance = ref(921.48);
</script>

<style lang="scss" scoped>
.expenses-chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 24px 22px 20px;

  background-color: $red;
  border-radius: 10px;

  font-family: $dm-sans;

  &__wrapper {
    color: white;
  }

  &__balance-title {
    margin-bottom: 4px;

    font-weight: 400;
    font-size: 0.938rem;
  }

  &__balance {
    font-size: 1.5em;
  }
}
</style>

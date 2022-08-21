<template>
  <div class="expenses-chart-header">
    <div class="expenses-chart-header__wrapper">
      <h1 class="expenses-chart-header__balance-title" data-test="balance-text">My balance</h1>
      <h2 class="expenses-chart-header__balance" data-test="balance-value">${{ balance }}</h2>
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

  @media screen and (min-width: $lg) {
    padding: 27px 39px 25px 32px;

    border-radius: 20px;
  }

  &__wrapper {
    color: white;
  }

  &__balance-title {
    margin-bottom: 4px;

    font-weight: 400;
    font-size: 0.938rem;

    @media screen and (min-width: $lg) {
      margin-bottom: 8px;

      font-size: 1.125rem;
    }
  }

  &__balance {
    font-size: 1.5em;

    @media screen and (min-width: $lg) {
      font-size: 2rem;
    }
  }
}
</style>

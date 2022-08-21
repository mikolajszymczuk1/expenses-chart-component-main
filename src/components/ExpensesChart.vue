<template>
  <div class="expenses-chart">
    <ExpensesChartHeader />

    <div class="expenses-chart__body">
      <ExpensesChartMainContent :chart-data="chartData" />
      <ExpensesChartSummary />
    </div>
  </div>
</template>

<script setup>
import ExpensesChartHeader from '@/components/ExpensesChartHeader.vue';
import ExpensesChartMainContent from '@/components/ExpensesChartMainContent.vue';
import ExpensesChartSummary from '@/components/ExpensesChartSummary.vue';

defineProps({
  chartData: {
    required: true,
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.expenses-chart {
  margin: 67px auto 0 auto;

  width: 92%;

  @media screen and (min-width: $md) {
    width: 60%;
  }

  @media screen and (min-width: $lg) {
    margin-bottom: 50px;

    width: 540px;
  }

  @media screen and (min-width: $xlg) {
    position: absolute;
    top: 50%;
    left: 50%;

    margin: 0;

    transform: translate(-50%, -50%);
  }

  &__body {
    margin-top: 16px;
    padding: 24px 20px;

    background-color: $card-white;
    border-radius: 10px;

    @media screen and (min-width: $lg) {
      margin-top: 24px;
      padding: 32px 40px 40px 40px;

      border-radius: 20px;
    }
  }
}
</style>

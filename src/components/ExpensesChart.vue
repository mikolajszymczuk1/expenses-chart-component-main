<template>
  <div class="expenses-chart">
    <ExpensesChartHeader />

    <div class="expenses-chart__body">
      <ExpensesChartMainContent />
      <ExpensesChartSummary />
    </div>
  </div>
</template>

<script setup>
import ExpensesChartHeader from '@/components/ExpensesChartHeader.vue';
import ExpensesChartMainContent from '@/components/ExpensesChartMainContent.vue';
import ExpensesChartSummary from '@/components/ExpensesChartSummary.vue';
</script>

<style lang="scss" scoped>
.expenses-chart {
  margin: 67px auto 0 auto;

  width: 92%;

  &__body {
    margin-top: 16px;
    padding: 24px 20px;

    background-color: $card-white;
    border-radius: 10px;
  }
}
</style>

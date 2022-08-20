<template>
  <div class="expenses-chart-main-content">
    <h2 class="expenses-chart-main-content__time-range-info">Spending - Last 7 days</h2>
    <div class="expenses-chart-main-content__chart">
      <div
        class="expenses-chart-main-content__single-day"
        v-for="dayData in chartData"
        :key="dayData.day"
      >
        <ExpensesChartDataBar :height="dayData.amount" />
        <div class="expenses-chart-main-content__day-name">{{ dayData.day }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExpensesChartDataBar from '@/components/ExpensesChartDataBar.vue';
import chartData from '@/data/data.json';
</script>

<style lang="scss" scoped>
.expenses-chart-main-content {
  padding-bottom: 24px;
  margin-bottom: 24px;

  border-bottom: solid 2px $cream-bg;

  font-family: $dm-sans;

  &__time-range-info {
    margin-bottom: 52px;

    font-size: 1.5rem;
    color: $dark-brown;
  }

  &__chart {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (min-width: $sm) {
      justify-content: center;
      column-gap: 12px;
    }
  }

  &__single-day {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__day-name {
    margin-top: 11px;

    font-size: 0.75em;
    color: $medium-brown;
  }
}
</style>

<template>
  <div class="expenses-chart-main-content">
    <h2 class="expenses-chart-main-content__time-range-info">Spending - Last 7 days</h2>
    <div class="expenses-chart-main-content__chart">
      <div
        class="expenses-chart-main-content__single-day"
        v-for="dayData in chartData"
        :key="dayData.day"
      >
        <ExpensesChartDataBar
          :height="calculateHeight(dayData.amount)"
          :is-max="isMaximumValue(dayData.amount)"
          :value="dayData.amount"
        />

        <div class="expenses-chart-main-content__day-name">{{ dayData.day }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExpensesChartDataBar from '@/components/ExpensesChartDataBar.vue';

const props = defineProps({
  chartData: {
    required: true,
    type: Array,
  },
});

// Const values
const CHART_HEIGHT_CONVERTER = 2.864782277;

// Calculate single bar height based on some value
const calculateHeight = (value) => Math.floor(value * CHART_HEIGHT_CONVERTER);

// Return true if value is maximum value from all days
const isMaximumValue = (value) => value === Math.max(...props.chartData.map((d) => d.amount));
</script>

<style lang="scss" scoped>
.expenses-chart-main-content {
  padding-bottom: 24px;
  margin-bottom: 24px;

  border-bottom: solid 2px $cream-bg;

  font-family: $dm-sans;

  @media screen and (min-width: $lg) {
    margin-bottom: 32px;
    padding-bottom: 32px;
  }

  &__time-range-info {
    margin-bottom: 52px;

    font-size: 1.5rem;
    color: $dark-brown;

    @media screen and (min-width: $lg) {
      margin-bottom: 66px;

      font-size: 2rem;
    }
  }

  &__chart {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (min-width: $sm) {
      justify-content: center;
      column-gap: 12px;
    }

    @media screen and (min-width: $lg) {
      column-gap: 18px;
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

    @media screen and (min-width: $lg) {
      margin-top: 8px;

      font-size: 0.938rem;
    }
  }
}
</style>

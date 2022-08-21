<template>
  <ExpensesChart :chart-data="data" />
</template>

<script setup>
import ExpensesChart from '@/components/ExpensesChart.vue';
import data from '@/data/data.json';
</script>

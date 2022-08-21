<template>
  <main>
    <ExpensesChart :chart-data="data" />
  </main>
</template>

<script setup>
import ExpensesChart from '@/components/ExpensesChart.vue';
import data from '@/data/data.json';
</script>

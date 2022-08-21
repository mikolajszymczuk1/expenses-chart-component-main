import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ExpensesChartSummary from '@/components/ExpensesChartSummary.vue';

describe('ExpensesChartSummary.vue', () => {
  let wrapper;
  const findThisMonthText = () => wrapper.find('[data-test=this-month-text]');
  const findThisMonthPrice = () => wrapper.find('[data-test=this-month-price]');
  const findLastMonthText = () => wrapper.find('[data-test=last-month-text]');
  const findLastMonthPrec = () => wrapper.find('[data-test=last-month-prec]');
  const createComponent = () => { wrapper = shallowMount(ExpensesChartSummary); };

  it('should has correct values', () => {
    createComponent();
    expect(findThisMonthText().text()).toBe('Total this month');
    expect(findThisMonthPrice().text()).toBe('$478.33');
    expect(findLastMonthText().text()).toBe('from last month');
    expect(findLastMonthPrec().text()).toBe('+2.4%');
  });
});

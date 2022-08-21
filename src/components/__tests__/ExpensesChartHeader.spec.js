import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ExpensesChartHeader from '@/components/ExpensesChartHeader.vue';

describe('ExpensesChartHeader.vue', () => {
  let wrapper;
  const findBalanceText = () => wrapper.find('[data-test=balance-text]');
  const findBalanceValue = () => wrapper.find('[data-test=balance-value]');
  const createComponent = () => { wrapper = shallowMount(ExpensesChartHeader); };

  it('should render correct values', () => {
    createComponent();
    expect(findBalanceText().text()).toBe('My balance');
    expect(findBalanceValue().text()).toBe('$921.48');
  });
});

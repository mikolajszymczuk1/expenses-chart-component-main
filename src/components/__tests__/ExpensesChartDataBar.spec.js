import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ExpensesChartDataBar from '@/components/ExpensesChartDataBar.vue';

describe('ExpensesChartDataBar.vue', () => {
  let wrapper;
  const findDataBar = () => wrapper.find('[data-test=data-bar]');
  const findBarValue = () => wrapper.find('[data-test=bar-value]');
  const createComponent = (options = null) => {
    wrapper = shallowMount(ExpensesChartDataBar, options);
  };

  it('should render correct values', () => {
    createComponent({
      props: {
        height: 100,
        value: 20,
      },
    });

    expect(findDataBar().attributes('style')).toBe('height: 100px;');
    expect(findBarValue().text()).toBe('$20');
  });

  it('based on isMax prop value should add or remove class', () => {
    createComponent({
      props: {
        height: 50,
        isMax: true,
      },
    });

    expect(findDataBar().classes()).toContain('expenses-chart-data-bar--max');
  });
});

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ExpensesChartMainContent from '@/components/ExpensesChartMainContent.vue';
import ExpensesChartDataBar from '@/components/ExpensesChartDataBar.vue';

const data = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

describe('ExpensesChartMainContent.vue', () => {
  let wrapper;
  const findRangeTimeTitle = () => wrapper.find('[data-test=range-time-title]');
  const findAllDataBars = () => wrapper.findAllComponents(ExpensesChartDataBar);
  const findAllDayNames = () => wrapper.findAll('[data-test=day-name]');
  const createComponent = (options = null) => {
    wrapper = mount(ExpensesChartMainContent, options);
  };

  it('should render correct title text', () => {
    createComponent({ props: { chartData: data } });
    expect(findRangeTimeTitle().text()).toBe('Spending - Last 7 days');
  });

  it('should correctly render all chart bars', () => {
    createComponent({ props: { chartData: data } });
    expect(findAllDataBars().length).toBe(7);
    expect(findAllDayNames().length).toBe(7);

    findAllDayNames().forEach((el, index) => {
      expect(el.text()).toBe(data[index].day);
    });
  });

  it('calculateHeight method should return correct calculated height value', () => {
    createComponent({ props: { chartData: data } });
    expect(wrapper.vm.calculateHeight(10)).toBe(28);
    expect(wrapper.vm.calculateHeight(52.36)).toBe(150);
  });

  it('isMaximumValue should return true if value is equal maximum value from all data', () => {
    createComponent({ props: { chartData: data } });
    expect(wrapper.vm.isMaximumValue(52.36)).toBeTruthy();
    expect(wrapper.vm.isMaximumValue(17.45)).toBeFalsy();
  });
});

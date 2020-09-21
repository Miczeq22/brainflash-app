import React from 'react';
import { mount } from 'enzyme';
import { Input } from './input.component';
import { ThemeProvider } from '@providers/theme.provider';

const wrapComponent = (props = {}) =>
  mount(
    <ThemeProvider>
      <Input {...props} />
    </ThemeProvider>,
  );

describe('Name of the group', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should not render error field', () => {
    const wrapper = wrapComponent();

    const errorField = wrapper.find('p').first();

    expect(errorField).toHaveLength(0);
  });

  test('should not render error field', () => {
    const wrapper = wrapComponent({
      touched: true,
      error: '#error',
    });

    const errorField = wrapper.find('p').first();

    expect(errorField).toHaveLength(1);
    expect(errorField.text()).toEqual('#error');
  });
});

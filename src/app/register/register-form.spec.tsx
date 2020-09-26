import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { RegisterForm } from './register-form.component';
import { AppProvider } from '@providers/app.provider';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

describe('<RegisterForm /> Component', () => {
  test('should render without crashing', () => {
    const { getByText } = render(
      <AppProvider>
        <RegisterForm onSubmit={jest.fn()} />
      </AppProvider>,
    );

    const element = getByText(/Register to/);

    expect(element).toBeInTheDocument();
  });

  test('should render all errors', async () => {
    const onSubmit = jest.fn();

    const { container, getAllByText, getByPlaceholderText } = render(
      <AppProvider>
        <RegisterForm onSubmit={onSubmit} />
      </AppProvider>,
    );

    await act(async () => {
      fireEvent.submit(container.querySelector('form') as HTMLElement);
      await userEvent.type(getByPlaceholderText('Confirm password...'), '#confirm');
    });

    await waitFor(() => {
      expect(getAllByText(/username is a required field/)).toHaveLength(1);
      expect(getAllByText(/email is a required field/)).toHaveLength(1);
      expect(getAllByText(/password is a required field/)).toHaveLength(1);
      expect(getAllByText(/Must accept terms and conditions/)).toHaveLength(1);
      expect(getAllByText(/passwords do not match/)).toHaveLength(1);
    });
  });

  test('should do not render errors if inputs are valid', async () => {
    const onSubmit = jest.fn();

    const { container, getByPlaceholderText, queryByText, getByText } = render(
      <AppProvider>
        <RegisterForm onSubmit={onSubmit} />
      </AppProvider>,
    );

    await act(async () => {
      await userEvent.type(getByPlaceholderText('Enter your username...'), 'John');
      await userEvent.type(getByPlaceholderText('Enter your email address...'), 'john@doe.com');
      await userEvent.type(getByPlaceholderText('Enter your password...'), '#password');
      await userEvent.type(getByPlaceholderText('Confirm password...'), '#password');
      fireEvent.click(getByText(/I have read, understand and agree to/));

      fireEvent.submit(container.querySelector('form') as HTMLElement);
    });

    await waitFor(() => {
      expect(queryByText(/username is a required field/)).not.toBeInTheDocument();
      expect(queryByText(/email is a required field/)).not.toBeInTheDocument();
      expect(queryByText(/password is a required field/)).not.toBeInTheDocument();
      expect(queryByText(/Must accept terms and conditions/)).not.toBeInTheDocument();
      expect(queryByText(/passwords do not match/)).not.toBeInTheDocument();
    });
  });

  test('should call onSubmit handler', async () => {
    const onSubmit = jest.fn();

    const { container, getByPlaceholderText, getByText } = render(
      <AppProvider>
        <RegisterForm onSubmit={onSubmit} />
      </AppProvider>,
    );

    await act(async () => {
      await userEvent.type(getByPlaceholderText('Enter your username...'), 'John');
      await userEvent.type(getByPlaceholderText('Enter your email address...'), 'john@doe.com');
      await userEvent.type(getByPlaceholderText('Enter your password...'), '#password');
      await userEvent.type(getByPlaceholderText('Confirm password...'), '#password');
      fireEvent.click(getByText(/I have read, understand and agree to/));

      fireEvent.submit(container.querySelector('form') as HTMLElement);
    });

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
  });
});

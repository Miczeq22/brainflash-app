import { AppProvider } from '@providers/app.provider';
import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { LoginForm } from './login-form.component';

describe('<LoginForm /> Component', () => {
  test('should render without crashing', () => {
    const { getByText } = render(
      <AppProvider>
        <LoginForm onSubmit={jest.fn()} />
      </AppProvider>,
    );

    const element = getByText(/Welcome to/);

    expect(element).toBeInTheDocument();
  });

  test('should render all errors', async () => {
    const { getAllByText, container } = render(
      <AppProvider>
        <LoginForm onSubmit={jest.fn()} />
      </AppProvider>,
    );

    act(() => {
      fireEvent.submit(container.querySelector('form') as HTMLElement);
    });

    await waitFor(() => {
      expect(getAllByText(/email is a required field/)).toHaveLength(1);
      expect(getAllByText(/password is a required field/)).toHaveLength(1);
    });
  });

  test('should not render errors if inputs are valid', async () => {
    const { container, getByPlaceholderText, queryByText } = render(
      <AppProvider>
        <LoginForm onSubmit={jest.fn()} />
      </AppProvider>,
    );

    await act(async () => {
      await userEvent.type(getByPlaceholderText('Enter email address...'), 'john@doe.com');
      await userEvent.type(getByPlaceholderText('Enter password...'), 'password');
      fireEvent.submit(container.querySelector('form') as HTMLElement);
    });

    await waitFor(() => {
      expect(queryByText(/email is a required field/)).not.toBeInTheDocument();
      expect(queryByText(/password is a required field/)).not.toBeInTheDocument();
    });
  });

  test('should call onSubmit handler', async () => {
    const onSubmit = jest.fn();

    const { container, getByPlaceholderText } = render(
      <AppProvider>
        <LoginForm onSubmit={onSubmit} />
      </AppProvider>,
    );

    await act(async () => {
      await userEvent.type(getByPlaceholderText('Enter email address...'), 'john@doe.com');
      await userEvent.type(getByPlaceholderText('Enter password...'), 'password');
      fireEvent.submit(container.querySelector('form') as HTMLElement);
    });

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});

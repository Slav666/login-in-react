import React from 'react';

import { expect, it } from 'vitest';

import { render, screen } from '~/test/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './app.component';

const query = new QueryClient();
describe('App', () => {
  it('should render the whole app', () => {
    render(
      <QueryClientProvider client={query}>
        <App />
      </QueryClientProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'Hello User' }),
    ).toBeInTheDocument();
  });
});

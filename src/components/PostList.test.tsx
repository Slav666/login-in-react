import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect } from 'vitest';
import PostList from './PostList';
import Post from './Post';
import { logRoles } from '@testing-library/dom';

describe('<PostList />', () => {
  const query = new QueryClient();
  it('shows the list of posts', async () => {
    const { container } = render(
      <QueryClientProvider client={query}>
        <PostList />
      </QueryClientProvider>,
    );
    logRoles(container);

    const result = await screen.findByRole('link', {
      name: 'When is the best weather is Scotland?',
    });
    console.log('Result', result);
    expect(result).toBeInTheDocument();
  });
});

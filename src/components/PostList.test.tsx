import * as React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import usePost from '~/hooks/usePost';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Post from './Post';
import { describe, it, expect } from 'vitest';
import PostList from './PostList';
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

    const result = await screen.findAllByRole('link');
    console.log('Result', result);
    expect(result).toHaveLength(4);

    const allTitles = result.map(element => element.title);
    console.log('all titles', allTitles);
    expect(allTitles).toEqual([
      'When is the best weather is Scotland?',
      'Why I like Scotland?',
      'What is the best feature for my sons?',
      'What is the best time to buy a house?',
    ]);
  });
});

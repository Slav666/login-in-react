import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

    const result = await screen.findByRole('slav', {
      name: 'When is the best weather is Scotland?',
    });
    console.log('Result', result);
    expect(result).toBeInTheDocument();

    // const allTitles = result.map(element => element);
    // console.log('all titles', allTitles);
    // expect(allTitles).toEqual([
    //   'When is the best weather is Scotland?',
    //   'Why I like Scotland?',
    //   'What is the best feature for my sons?',
    //   'What is the best time to buy a house?',
    // ]);
  });
});

import { renderHook } from '@testing-library/react-hooks';
import usePosts from './usePosts';
import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { server } from '../mocks/server';
import { rest } from 'msw';

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('usePost', () => {
  it.only('check that fetch all posts', async () => {
    const { result, waitFor } = renderHook(() => usePosts(), { wrapper });
    const posts = [
      {
        id: 1,
        ownerId: 2,
        title: 'Test1',
        post: 'Test Post',
      },
      {
        id: 2,
        ownerId: 2,
        title: 'Test2',
        post: 'Test Post 2',
      },
      {
        id: 3,
        ownerId: 2,
        title: 'Test3',
        post: 'Test Post 3',
      },
      {
        id: 4,
        ownerId: 2,
        title: 'Test4',
        post: 'Test Post 4',
      },
    ];
    server.use(
      rest.get('*/api/posts/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(posts));
      }),
    );
    const expectedActions = expect.arrayContaining([
      expect.objectContaining({
        id: 4,
        title: 'Test4',
        post: 'Test Post 4',
      }),
    ]);
    await waitFor(() => {
      return result.current.isSuccess;
    });
    expect(result.current.data).toStrictEqual(expectedActions);
  });
});

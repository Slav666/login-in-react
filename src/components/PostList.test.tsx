import * as React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import PostList from './PostList';
// import { selectBookmark } from './bookmarks.slice';

describe('<PostList />', () => {
  it.only('shows the list of posts', async () => {
    render(<PostList />, {
      // state: {
      //   accounts: { userKey: '' },
      //   bookmarks: { bookmarks: [] },
      // },
    });

    await screen.findByRole('link', {
      name: 'When is the best weather in Scotland',
    });
  });
});

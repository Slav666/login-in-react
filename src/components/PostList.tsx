import React, { FC } from 'react';
import Post from './Post';
import usePosts from '~/hooks/usePosts';
import { BlogData } from '../utility/interface';
import { z } from 'zod';
export type Blog = z.infer<typeof BlogData>;
const PostList: FC = () => {
  const { data, status } = usePosts();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }
  return (
    <>
      <ul className="m-2 py-2 md:container md:mx-auto">
        {data.map((post: Blog) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default PostList;

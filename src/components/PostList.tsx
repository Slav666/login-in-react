import React, { FC } from 'react';
import Post from './Post';
import usePosts from '~/hooks/usePosts';
import { IPost } from '../utility/interface';

const PostList: FC = () => {
  const { data, status } = usePosts();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Data fetch error.</div>;
  }
  return (
    <>
      <ul className="container m-4 mx-auto max-w-4xl p-8">
        {data.map((post: IPost) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default PostList;

import React, { FC } from 'react';
import Post from './Post';
import usePosts from '~/hooks/usePosts';
import { IPost } from '../utility/interface';

interface Data {
  data: {
    title: string;
    post: string;
    id: number;
    ownerId: number;
    creationDate: number;
  }[];
}

const PostList: FC<Data> = () => {
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
        {data.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default PostList;

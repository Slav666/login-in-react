import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Post from './Post';
import usePosts from '~/hooks/usePosts';
import usePost from '~/hooks/usePost';

const PostList = () => {
  const { data, status } = usePosts();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }
  return (
    <>
      <ul className=" py-2">
        {data.map(post => (
          <Post
            key={post.id}
            post={post}
            // onClick={() => setActivePostId(post.id)}
            // activePostId={activePostId}
          />
        ))}
      </ul>
    </>
  );
};

export default PostList;

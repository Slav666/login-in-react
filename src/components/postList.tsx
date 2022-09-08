import React from 'react';
// import { ITask } from './Interfaces';
import { useQuery } from '@tanstack/react-query';
import Post from './post';

// interface Props {
//   tasks: ITask[];
// }

const PostList = () => {
  const fetchPosts = async () => {
    const response = await fetch(`/api/posts/`);
    const data = await response.json();
    return data;
  };

  const { data, status } = useQuery(['posts'], fetchPosts);

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
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default PostList;

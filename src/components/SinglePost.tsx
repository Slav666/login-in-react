import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import usePost from '~/hooks/usePost';

const SinglePostPage = () => {
  const { id } = useParams();
  const { data: post, status } = usePost(id);
  return (
    <div>
      Single Post page: <h4>{post?.title}</h4>
      <h2>{post?.post}</h2>
    </div>
  );
};

export default SinglePostPage;

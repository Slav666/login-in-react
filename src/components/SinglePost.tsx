import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import usePost from '~/hooks/usePost';

const SinglePostPage = () => {
  const { id } = useParams();
  const { data: post, status } = usePost(id);
  return (
    <div>
      Single Post page: <h4>{post?.post}</h4>
    </div>
  );
};

export default SinglePostPage;

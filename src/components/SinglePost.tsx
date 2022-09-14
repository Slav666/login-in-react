import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import usePost from '~/hooks/usePost';

const SinglePostPage = () => {
  const { postId } = useParams();
  const { data: post, status } = usePost(+postId);

  return (
    <div>
      Single Post page: <h4>{}</h4> <p>{}</p>
    </div>
  );
};

export default SinglePostPage;

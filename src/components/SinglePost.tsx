import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import usePost from '~/hooks/usePost';

const SinglePostPage = () => {
  const { id } = useParams();
  const { data: post, status } = usePost(id);
  console.log('post title from single page', post);
  console.log('post id from single post page', id);
  return (
    <div>
      Single Post page: <h4>{post}</h4>
      <p>{post}</p>
    </div>
  );
};

export default SinglePostPage;

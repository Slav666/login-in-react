import React from 'react';
import { useParams } from 'react-router-dom';
import usePost from '~/hooks/usePost';

const SinglePostPage = () => {
  const { id } = useParams();
  const { data: post, status } = usePost(id);
  return (
    <div>
      Single Post page: <title className="">{post?.title}</title>
      <div className="">{post?.post}</div>
    </div>
  );
};

export default SinglePostPage;

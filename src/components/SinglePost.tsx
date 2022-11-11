import React from 'react';
import { useParams } from 'react-router-dom';
import usePost from '~/hooks/usePost';

const SinglePostPage = () => {
  const { id } = useParams();
  const { data: post, status } = usePost(id);
  return (
    <div>
      <title className="text-l flex justify-around ">
        Post Created: {post?.creationDate}
      </title>
      <title className="text-l flex justify-around ">
        Post Created by user: {post?.id}
      </title>
      <title className="flex justify-around text-4xl ">{post?.title}</title>
      <div className="mx-16 my-4 flex justify-center text-xl">{post?.post}</div>
    </div>
  );
};

export default SinglePostPage;

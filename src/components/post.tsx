import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../utility/interface';
import useDeletePost from '~/hooks/useDeletePost';

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  const user = { id: 1, name: 'Mark', surname: 'Small' };
  const { mutateAsync, isLoading } = useDeletePost();
  // console.log('post from post component', post);
  // console.log('USER: ', user);

  const removePost = async (): Promise<void> => {
    await mutateAsync({ postId: post.id, userId: user.id });
  };
  return (
    <li key={post.id}>
      {/* <Link to={`singlePost/${post.id}`}>{post.title}</Link> } */}
      <Link to="singlePost/">{post.title}</Link>
      <button className="bg-red-400" onClick={removePost}>
        Delete
      </button>
      <button className="mx-2 bg-yellow-500">Update Post</button>
    </li>
  );
};

export default Post;

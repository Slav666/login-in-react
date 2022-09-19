import React from 'react';
import PostForm from './PostForm';
import { useParams, useNavigate } from 'react-router-dom';
import useUpdatePost from '~/hooks/useUpdatePost';
import { useQuery } from '@tanstack/react-query';

const UpdatedPost = () => {
  const user = { id: 1, name: 'Mark', surname: 'Small' };
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchPosts = async () => {
    const response = await fetch(`/api/posts/`);
    const data = await response.json();
    return data;
  };

  const { data, status } = useQuery(['posts'], fetchPosts);
  const post = data.find(post => post.id == id);
  const { mutateAsync } = useUpdatePost();

  const onFormSubmit = async formData => {
    await mutateAsync({ post: { ...formData }, userId: user.id });
    navigate('/');
  };
  return (
    <div>
      <PostForm defaultValues={post} onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default UpdatedPost;

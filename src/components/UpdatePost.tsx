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
  // console.log('data from update', data);
  const post = data.find(post => post.id == id);
  // console.log(post);
  const { mutateAsync } = useUpdatePost();

  const onFormSubmit = async formData => {
    console.log('form data', formData);
    await mutateAsync({ post: { ...formData }, userId: user.id });
    console.log('data from form', formData);
    console.log('post from form ', post);
    console.log('user id: ', user.id);
    navigate('/');
  };
  return (
    <div>
      <PostForm defaultValues={post} onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default UpdatedPost;

import React from 'react';
import PostForm from './PostForm';
import useCreatePost from '~/hooks/useCreatePost';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const { mutateAsync, status, isLoading } = useCreatePost();

  const onFormSubmit = async data => {
    await mutateAsync({ ...data });
    navigate('/');
  };
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }
  return (
    <div>
      <PostForm onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default CreatePost;

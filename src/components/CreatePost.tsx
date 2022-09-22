import React from 'react';
import PostForm from './PostForm';
import useCreatePost from '~/hooks/useCreatePost';

const CreatePost = () => {
  const { mutateAsync, isLoading } = useCreatePost();

  const onFormSubmit = async data => {
    await mutateAsync({ ...data });
  };
  return (
    <div>
      <PostForm onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default CreatePost;

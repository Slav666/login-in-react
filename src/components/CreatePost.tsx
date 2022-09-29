import React from 'react';
import PostForm from './PostForm';
import useCreatePost from '~/hooks/useCreatePost';

const CreatePost = () => {
  const { mutateAsync, status, isLoading } = useCreatePost();

  const onFormSubmit = async data => {
    await mutateAsync({ ...data });
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

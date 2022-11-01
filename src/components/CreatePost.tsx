import React from 'react';
import PostForm from './PostForm';
import useCreatePost from '~/hooks/useCreatePost';
import { IPost } from '../utility/interface';

const addTwoNumbers = (number1, number2) => {
  return number1 + number2;
};


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

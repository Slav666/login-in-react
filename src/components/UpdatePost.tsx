import React from 'react';
import PostForm from './PostForm';
import { useParams, useNavigate } from 'react-router-dom';
import useUpdatePost from '~/hooks/useUpdatePost';
import { useQuery, useMutation } from '@tanstack/react-query';
import usePost from '~/hooks/usePost';
import usePosts from '~/hooks/usePosts';

const UpdatedPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post } = usePost(+id);
  // console.log('DATA', post);
  const { mutateAsync } = useUpdatePost();

  const onFormSubmit = async formData => {
    console.log('FORM DATA!!!!!!!!!!', post);
    await mutateAsync({ ...formData });
    navigate('/');
  };
  return (
    <div>
      <PostForm defaultValues={post} onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default UpdatedPost;

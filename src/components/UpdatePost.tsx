import React, { FC } from 'react';
import PostForm from './PostForm';
import { useParams, useNavigate } from 'react-router-dom';
import useUpdatePost from '~/hooks/useUpdatePost';
import usePost from '~/hooks/usePost';
import { IPost, IUser } from '../utility/interface';

const UpdatedPost: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post } = usePost(+id);
  const user: IUser = { userId: 1, name: 'Slav', surname: 'Dyk' };
  const { mutateAsync } = useUpdatePost({ userId: user.userId });
  // console.log('userId', user.userId);
  const onFormSubmit = async formData => {
    console.log('form data', formData);
    await mutateAsync({ ...formData });
    navigate('/');
  };
  return <PostForm defaultValues={post} onFormSubmit={onFormSubmit} />;
};

export default UpdatedPost;

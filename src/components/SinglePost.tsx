import React from 'react';
import Post from './Post';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const SinglePostPage = () => {
  const fetchPosts = async () => {
    const response = await fetch(`/api/posts/`);
    const data = await response.json();
    return data;
  };

  const { data, status } = useQuery(['posts'], fetchPosts);

  const { id } = useParams();
  const post = data.find(post => post.id.toString() === id);
  return (
    <div>
      Single Post page: <h4>{post.title}</h4> <p>{post.post}</p>
    </div>
  );
};

export default SinglePostPage;

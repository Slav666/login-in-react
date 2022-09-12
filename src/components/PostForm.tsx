import React, { ChangeEvent, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const PostForm = ({ defaultValues, onFormSubmit }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit(data => {
    onFormSubmit(data);
    console.log('on submit data', data);
  });
  return (
    <form onSubmit={onSubmit}>
      <label className="mx-2" htmlFor="title">
        Post title
      </label>
      <input
        {...register('title', { required: true })}
        autoFocus
        className="bg-black"
        id="title"
        name="title"
        placeholder="Post title"
        type="text"
      />
      <label className="mx-2" htmlFor="post">
        Post content
      </label>
      <input
        {...register('post', { required: true })}
        autoFocus
        className="bg-black"
        id="post"
        name="post"
        placeholder="Post"
        type="text"
      />
      <button
        aria-label="Add Item"
        className="mx-4 rounded bg-sky-500 py-2 px-4 hover:bg-cyan-600"
        type="submit"
      >
        Save Post
      </button>
    </form>
  );
};

export default PostForm;

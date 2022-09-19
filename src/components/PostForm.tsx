import React, { ChangeEvent, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const PostForm = ({ defaultValues, onFormSubmit }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit(data => {
    onFormSubmit(data);
  });
  return (
    <form className="flex flex-col p-10" onSubmit={onSubmit}>
      <label className="mx-2" htmlFor="title">
        Post Title:
      </label>
      <input
        {...register('title', { required: true })}
        autoFocus
        className="m-3 border-2 border-gray-500 bg-gray-500"
        id="title"
        name="title"
        type="text"
      />
      <label className="m-3" htmlFor="post">
        Post Content:
      </label>
      <textarea
        {...register('post', { required: true })}
        className="border-2 border-gray-500 bg-gray-500"
        cols={50}
        id="post"
        name="post"
        rows={8}
      />
      <div className="flex justify-center p-2">
        <button
          aria-label="Add Item"
          className="m-2 rounded-md bg-sky-500 p-2 hover:bg-sky-800"
          type="submit"
        >
          Save Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;

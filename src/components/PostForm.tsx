import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const PostForm = ({ defaultValues, onFormSubmit }) => {
  const formHandler = useForm({ defaultValues });
  // console.log('FORM HANDLER: ', formHandler);
  // console.log('FORM VALUES: ', formHandler.getValues());
  const { register, handleSubmit, reset } = formHandler;
  // const { register, handleSubmit } = useForm({ defaultValues });
  // console.log('register props from form', register);

  const onSubmit = handleSubmit(data => {
    onFormSubmit(data);
  });

  useEffect(() => {
    reset({ ...defaultValues });
  }, [reset, defaultValues]);
  return (
    <form
      className="m-4 flex flex-col md:container md:mx-auto"
      onSubmit={onSubmit}
    >
      <label className="mx-2" htmlFor="title">
        Post Title:
      </label>
      <input
        {...register('title')}
        autoFocus
        className="m-3 border-2 border-gray-500 bg-pink-500 p-2"
        defaultValue={defaultValues?.title}
        id="title"
        name="title"
        type="text"
      />
      <label className="m-3" htmlFor="post">
        Post Content:
      </label>
      <textarea
        {...register('post')}
        className="border-2 border-gray-500 bg-gray-500 p-8"
        cols={50}
        defaultValue={defaultValues?.post}
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

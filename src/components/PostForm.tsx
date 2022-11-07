import React, { useEffect, FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// import { BlogData } from '~/utility/interface';

export const FormSchema = z.object({
  title: z.string().min(5),
  post: z.string().min(20),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

const PostForm: FC = ({ defaultValues, onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues,
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = handleSubmit(data => {
    console.log(data);
    return onFormSubmit(data);
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

      {errors.title && (
        <p className="m1 text-sm text-red-600">{errors.title.message[0]}</p>
      )}

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
      {errors.post && (
        <p className="m1 text-sm text-red-600">{errors.post.message}</p>
      )}
      <div className="flex justify-center p-2">
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
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

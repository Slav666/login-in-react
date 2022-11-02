import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BlogData } from '../utility/interface';
import useDeletePost from '~/hooks/useDeletePost';
import { z } from 'zod';

// interface Props {
//   post: IPost;
//   postId: number;
// }
// export const Props = z.object({
//   post: BlogData,
//   postId: z.number(),
// });

// interface User {
//   id: number;
//   name: string;
//   surname: string;
// }
export const User = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
});

export type Blog = z.infer<typeof BlogData>;
const Post: FC = ({ post }: Blog) => {
  const user = { id: 2, name: 'Mark', surname: 'Small' };
  const { mutateAsync, status, isLoading } = useDeletePost();

  const removePost = async (): Promise<void> => {
    await mutateAsync({ postId: post.id, userId: user.id });
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // if (status === 'error') {
  //   return <div>Error</div>;
  // }
  return (
    <li
      key={post.id}
      className="m-2 flex max-w-4xl cursor-pointer flex-col rounded border-2 border-gray-900 bg-gray-500 p-2"
    >
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
      <p>{post.post}</p>
      <div className="flex justify-center">
        <button
          className="m-2 rounded-md bg-red-500 p-2 hover:bg-red-800"
          onClick={removePost}
        >
          Delete
        </button>

        <Link
          className="m-2 rounded-md bg-blue-500 p-2 hover:bg-blue-700"
          to={`/updatePost/${post.id}`}
        >
          Update Post
        </Link>
      </div>
      <ul></ul>
    </li>
  );
};

export default Post;

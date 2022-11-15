import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPost, IUser } from '../utility/interface';
import useDeletePost from '~/hooks/useDeletePost';

interface Props {
  post: IPost;
  postId: number;
}

const Post: FC = ({ post }: Props) => {
  const user: IUser = { userId: 1, name: 'Mark', surname: 'Small' };
  const { mutateAsync, status, isLoading } = useDeletePost();

  const removePost = async () => {
    await mutateAsync({ postId: post.id, userId: user.userId });
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }
  return (
    <li
      key={post.id}
      className="m-4 cursor-pointer rounded-3xl border-2 border-gray-700 bg-gray-500 p-4 md:container md:mx-auto"
    >
      <p className="">Post Created by user: {post.ownerId}</p>
      <Link to={`/posts/${post.id}`} className="text-xl font-bold text-black">
        {post.title}
        <p className="text-sm text-white">
          {post.post.slice(0, 200).concat('...')}
        </p>
      </Link>
      <div className="m-2 flex justify-center">
        <button
          className="m-2 rounded-md bg-red-500 p-2 hover:bg-red-800 disabled:bg-blue-900"
          onClick={removePost}
          disabled={post.ownerId !== user.userId}
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

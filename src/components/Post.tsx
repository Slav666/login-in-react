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

  const removePost = async (): Promise<void> => {
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
      className="m-2 flex cursor-pointer flex-col rounded border-2 border-gray-900 bg-gray-500 p-8 md:container md:mx-auto"
    >
      <p className="">Post Created by user: {post.ownerId}</p>
      <Link to={`/posts/${post.id}`} className="text-xl font-bold text-black">
        {post.title}
      </Link>
      <p className="">{post.post}</p>
      <div className="m-8 flex justify-center">
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

import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../utility/interface';
import useDeletePost from '~/hooks/useDeletePost';

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  const user = { id: 5, name: 'Mark', surname: 'Small' };
  // console.log(post);
  const { mutateAsync, isLoading } = useDeletePost();

  const removePost = async (): Promise<void> => {
    await mutateAsync({ postId: post.id, userId: user.id });
  };
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

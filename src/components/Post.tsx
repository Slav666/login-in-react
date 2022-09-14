import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../utility/interface';
import useDeletePost from '~/hooks/useDeletePost';

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  const user = { id: 5, name: 'Mark', surname: 'Small' };
  console.log(post);
  const { mutateAsync, isLoading } = useDeletePost();

  const removePost = async (): Promise<void> => {
    await mutateAsync({ postId: post.id, userId: user.id });
  };
  return (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
      <p>{post.post}</p>
      <button className="bg-red-400" onClick={removePost}>
        Delete
      </button>

      <Link className="bg-yellow-500" to={`/updatePost/${post.id}`}>
        Update Form
      </Link>
      <ul></ul>
    </li>
  );
};

export default Post;

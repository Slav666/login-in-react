import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdatePost({ userId }) {
  const queryClient = useQueryClient();
  return useMutation(
    post => {
      console.log('Post from uSe update post', post);
      console.log('USER ID FROM update hook', userId);
      // const returnedTarget = Object.assign(post, userId);
      const body = { ...post, userId };
      console.log('BODY FROM USE UPDATE POST!!!!!!', body);
      return axios.patch(`/api/posts/${post.id}`, body).then(res => {
        // console.log('Two objects merged', returnedTarget);
        res.data;
      });
    },
    {
      onError: error => {
        console.log('Error from useUpdatePost hook', error);
        alert(
          'Only the creator of this post has the right to delete and update it!',
        );
      },
      onSuccess: async post => {
        queryClient.invalidateQueries(['posts']);
        await queryClient.invalidateQueries(['post', post?.id]);
      },
    },
  );
}

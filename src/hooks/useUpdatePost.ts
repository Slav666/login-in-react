import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation(
    post => {
      console.log('post id from use update post ', post.id);
      // console.log('USER ID 111122222', userId);
      return axios.patch(`/api/posts/${post.id}`, post).then(res => {
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

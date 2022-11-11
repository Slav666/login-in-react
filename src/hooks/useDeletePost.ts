import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation(
    ({ postId, userId }) => {
      return axios
        .delete(`/api/posts/${postId}`, { headers: {}, data: { userId } })
        .then(res => res.data);
    },
    {
      onError: error => {
        console.log('slavs error', error);
        alert(
          'Only the creator of this post has the right to delete and update it!',
        );
      },
      onSuccess: () => queryClient.invalidateQueries(['posts']),
    },
  );
}

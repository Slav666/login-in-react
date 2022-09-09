import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation(
    post => axios.patch(`/api/posts/${post.id}`, post).then(res => res.data),
    {
      onSuccess: async id => {
        queryClient.invalidateQueries(['posts']);
        await queryClient.invalidateQueries(['post', id]);
      },
    },
  );
}

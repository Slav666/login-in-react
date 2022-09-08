import axios, { AxiosRequestConfig } from 'axios';
import {
  parseMutationArgs,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

export default function useDeletePost() {
  // const user = { id: 1, name: 'Mark', surname: 'Mark' };
  const queryClient = useQueryClient();
  return useMutation(
    ({ postId, userId }) =>
      axios
        .delete(`/api/posts/${postId}`, { headers: {}, data: { userId } })
        .then(res => res.data),
    {
      onError: error => {
        console.log('slavs error', error);
        alert('This is bad request');
      },
      onSuccess: () => queryClient.invalidateQueries(['posts']),
    },
  );
}

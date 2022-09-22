import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation(
    values => axios.post('/api/posts/', values).then(res => res.data),
    {
      onSuccess: () => queryClient.invalidateQueries(['posts']),
    },
  );
}

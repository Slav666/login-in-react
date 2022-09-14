import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation(
    ({ post, userId }) =>
      axios
        .patch(
          `/api/posts/${post.id}`,
          { post, userId },
          {
            headers: {},
          },
        )
        .then(res => {
          res.data;
        }),
    {
      onError: error => {
        console.log('Error from useUpdatePost hook', error);
        alert(
          'Only the creator of this post has the right to delete and update it!',
        );
      },
      onSuccess: async id => {
        queryClient.invalidateQueries(['posts']);
        await queryClient.invalidateQueries(['post', id]);
      },
    },
  );
}

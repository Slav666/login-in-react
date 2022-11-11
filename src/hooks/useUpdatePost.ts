import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdatePost({ userId }) {
  const queryClient = useQueryClient();
  return useMutation(
    post => {
      const body = { ...post, userId };
      return axios.patch(`/api/posts/${post?.id}`, body).then(res => {
        res.data;
        //onMutate code is used for optimistic update
        // {
        //   onMutate: values => {
        //     const previousPost = queryClient.getQueryData([
        //       'post',
        //       values.id,
        //     ]);
        //     queryClient.setQueryData(['post', values.id], old => ({
        //       ...old,
        //       ...values,
        //     }));
        //     return () =>
        //       queryClient.setQueryData(['post', values.id], previousPost);
        //   },
        // };
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

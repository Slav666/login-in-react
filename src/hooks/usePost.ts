import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function usePost(postId) {
  return useQuery(['post', postId], () => {
    return axios.get(`/api/posts/${postId}`).then(res => {
      console.log('DATA FROM USE POST HOOK', res.data);
      return res.data;
    });
  });
}

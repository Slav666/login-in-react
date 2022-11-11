import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function usePost(id) {
  const query = useQuery(['post', id], () => {
    return axios.get(`/api/posts/${id}`).then(res => {
      return res.data;
    });
  });
  return query;
}

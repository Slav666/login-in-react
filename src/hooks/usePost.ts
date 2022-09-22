import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function usePost(id) {
  // console.log('use post id', id);

  const query = useQuery(['post', id], () => {
    return axios.get(`/api/posts/${id}`).then(res => {
      // console.log('DATA FROM USE POST HOOK', res.data);
      return res.data;
    });
  });
  // console.log('query from use Post hook', query);
  return query;
}

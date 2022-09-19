import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function usePosts() {
  return useQuery(['posts'], () =>
    axios.get('/api/posts/').then(res => {
      console.log('RES DATA FROM USE POST', res.data);
      return res.data;
    }),
  );
}

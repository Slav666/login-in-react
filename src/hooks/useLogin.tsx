import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function useLoginUser() {
  const query = useQuery(['loginUsers'], () => {
    return axios.get(`/api/login/`).then(res => {
      return res.data;
    });
  });
  return query;
}

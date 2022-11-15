import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

// export const BlogData = z.object({
//   id: z.number(),
//   ownerId: z.number(),
//   creationDate: z.string(),
//   title: z.string(),
//   post: z.string(),
// });

// const Blogs = z.array(BlogData);
// export type Blogs = z.infer<typeof BlogData>;
export default function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation(
    values =>
      axios.post('/api/posts/', values).then(res => {
        return res.data;
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['posts']),
    },
  );
}

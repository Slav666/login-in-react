import { z } from 'zod';

export const BlogData = z.object({
  id: z.number(),
  ownerId: z.number(),
  creationDate: z.string(),
  title: z.string(),
  post: z.string(),
});

export const IUser = z.object({
  userId: z.number(),
});

// export interface IPost {
//   userId(userId: number);
//   id: number;
//   ownerId: number;
//   creationDate: string;
//   title: string;
//   post: string;
// }
// export interface IUser {
//   userId: number;
// }

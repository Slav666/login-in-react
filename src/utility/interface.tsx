export interface IPost {
  userId(userId: number);
  id: number;
  ownerId: number;
  creationDate: string;
  title: string;
  post: string;
}
export interface IUser {
  userId: number;
  name: string;
  surname: string;
}

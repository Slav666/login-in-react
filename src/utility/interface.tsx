export interface IPost {
  userId(arg0: string, userId: any): unknown;
  id: number;
  ownerId: number;
  creationDate: string;
  title: string;
  post: string;
}
export interface IUser {
  userId: number;
}

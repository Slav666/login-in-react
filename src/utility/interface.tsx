export interface IPost {
  // map(
  //   arg0: (singlePost: any) => JSX.Element,
  // ):
  //   | import('react-i18next').ReactI18NextChild
  //   | Iterable<import('react-i18next').ReactI18NextChild>;
  id: number;
  ownerId: number;
  creationDate: string;
  title: string;
  post: string;
}

export const database = [
  {
    // id: '1',
    username: 'user1',
    password: 'password1',
  },
  {
    // id: '2',
    username: 'user2',
    password: 'password2',
  },
  {
    // id: '3',
    username: 'user3',
    password: 'password3',
  },
];

const getUsers = () => database;
const getSingleUser = getUser => {
  const currentUser = database.find(
    user =>
      user.username === getUser.username && user.password === getUser.password,
  );
  if (
    currentUser.username === getUser.username &&
    currentUser.password === getUser.password
  ) {
    return currentUser;
  } else {
    return false;
  }
};
export { getSingleUser, getUsers };

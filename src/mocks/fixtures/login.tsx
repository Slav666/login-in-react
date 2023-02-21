export const database = [
  {
    username: 'user1',
    password: 'password1',
  },
  {
    username: 'user2',
    password: 'password2',
  },
  {
    username: 'user3',
    password: 'password3',
  },
];

const getUsers = () => database;
const getSingleUser = (username, password) => {
  const currentUser = database.find(
    user => user.username === username && user.password === password,
  );
  return currentUser;
};

export { getSingleUser, getUsers };

// import React from 'react';
// import LoginFormTest from './login-form-test';
// import useLoginUser from '~/hooks/useLogin';
// import axios from 'axios';

// const UserLogIn = () => {
//   const { mutateAsync, status, isLoading } = useLoginUser();

//   const onFormSubmit = async formdata => {
//     console.log('DATA', formdata);
//     await mutateAsync({ ...formdata });
//   };
//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'error') {
//     return <div>Error</div>;
//   }
//   return (
//     <div>
//       <LoginFormTest onFormSubmit={onFormSubmit} />
//     </div>
//   );
// };

// export default UserLogIn;

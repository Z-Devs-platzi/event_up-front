import React from 'react';
import { useAuthState } from '../../context/auth-context';
import { useUser } from '../../context/user-context';
import AppWrapper from '../../components/AppWrapper';
const Home = () => {
  let { logout } = useAuthState();
  let user = useUser();
  return (
    <AppWrapper>
      <section>
        <h2>HOME {`${user.first_name} ${user.last_name}`}</h2>
        <button onClick={() => logout()}>LogOut</button>
      </section>
    </AppWrapper>
  );
};
export default Home;

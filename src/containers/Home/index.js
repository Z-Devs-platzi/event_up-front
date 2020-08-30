import React from 'react';
import { useAuthState } from '../../context/auth-context';
import { useUser } from '../../context/user-context';
const Home = () => {
  let { logout } = useAuthState();
  let user = useUser();
  return (
    <>
      <section>
        <h2>HOOME {user.name}</h2>
        <button onClick={() => logout()}>LogOut</button>
      </section>
    </>
  );
};
export default Home;

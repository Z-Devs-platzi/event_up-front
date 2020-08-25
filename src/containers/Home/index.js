import React from 'react';
import { useFetch } from '../../utility/hooks/useFetch';
import { SearchPeopleSW } from '../../utility/enpoints/search';
import { useAuthState } from '../../context/auth-context';
const Home = () => {
  let { logout } = useAuthState();
  const { response, isLoading } = useFetch(SearchPeopleSW, {
    params: { page: '2' },
    body: null,
    path: '',
  });
  const { data = [] } = response;
  return (
    <>
      <section>
        <h2>HOOME</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {data.map((i) => (
              <li key={i.id}>{i.first_name}</li>
            ))}
          </ul>
        )}
        <button onClick={() => logout()}>LogOut</button>
      </section>
    </>
  );
};
export default Home;

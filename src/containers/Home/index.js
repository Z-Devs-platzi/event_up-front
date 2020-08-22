import React from 'react';
import { useFetch } from '../../utility/hooks/useFetch';
import { SearchPeopleSW } from '../../utility/enpoints/search';
const Home = () => {
  const { response, isLoading } = useFetch(SearchPeopleSW, {
    params: { search: 'r2' },
    body: null,
    path: '',
  });
  const { results = [] } = response;
  return (
    <>
      <section>
        <h2>HOOME</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {results.map((i) => (
              <li key={i.name}>{i.name}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};
export default Home;

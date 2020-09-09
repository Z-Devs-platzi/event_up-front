import React from 'react';
import AppWrapper from '../../components/AppWrapper';
import EventRow from '../../components/EventRow';
import Spiner from '../../components/Spiner';
import { CenterDiv } from '../../styles/GlobalStyles';

import { useFetch } from '../../utility/hooks/useFetch';
import { GetEventRequest } from '../../utility/enpoints/event';
import { getToken } from '../../auth-provider';

const Events = () => {
  const { response, isLoading } = useFetch(GetEventRequest, {
    path: '',
    body: null,
    params: {},
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  });

  if (isLoading) {
    return (
      <AppWrapper>
        <CenterDiv>
          <Spiner color={'#ffd43b'} size={100} />
        </CenterDiv>
      </AppWrapper>
    );
  }

  return (
    <AppWrapper>
      <section>
        {response.results.map((item) => {
          return (
            <EventRow
              key={item.pk}
              eventLogo={item.banner_img}
              eventName={item.name}
              eventDate={item.date}
            />
          );
        })}
      </section>
    </AppWrapper>
  );
};
export default Events;

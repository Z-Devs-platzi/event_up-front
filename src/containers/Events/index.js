import React from 'react';
import AppWrapper from '../../components/AppWrapper';
import EventsList from '../../components/EventsList';
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
      <EventsList rows={response.data.results} />
    </AppWrapper>
  );
};
export default Events;

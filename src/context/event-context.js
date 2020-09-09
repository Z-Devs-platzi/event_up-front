import React, { useState, useRef, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spiner from '../components/Spiner';
import { CenterDiv } from '../styles/GlobalStyles';
import { useFetch } from '../utility/hooks/useFetch';
import { GetEventRequest } from '../utility/enpoints/event';
// remove for the get event data
import { getToken } from '../auth-provider';

const EventContext = React.createContext();

export const EventProvider = (props) => {
  let { eventname } = useParams();

  let { isLoading } = useFetch(GetEventRequest, {
    path: `${eventname}`,
    body: null,
    params: {},
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  });

  const [data, setData] = useState({
    id: '',
    name: '',
    date: '',
    description: '',
    url: '',
    banner_img: '',
    banner_title: '',
    template: {
      id: 1,
      colors: '',
      banner: '',
      font: '',
      layout: {
        id: 1,
        comment: '',
      },
    },
    sponsors: [],
    schedule: [
      {
        id: '',
        title: '',
        date: '',
        expositors: [
          {
            name: '',
            bio: '',
            twitter: '',
            picture: '',
          },
        ],
      },
    ],
  });
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setData({
      id: '',
      name: '',
      date: '',
      description: '',
      url: '',
      banner_img: '',
      banner_title: '',
      template: {
        id: 1,
        colors: '',
        banner: '',
        font: '',
        layout: {
          id: 1,
          comment: '',
        },
      },
      sponsors: [],
      schedule: [
        {
          id: '',
          title: '',
          date: '',
          expositors: [
            {
              name: '',
              bio: '',
              twitter: '',
              picture: '',
            },
          ],
        },
      ],
    });
    console.log('component Did Update Function ', eventname);
  }, [eventname]);

  if (isLoading) {
    return (
      <CenterDiv>
        <Spiner color={'#ffd43b'} size={100} />
      </CenterDiv>
    );
  }
  return <EventContext.Provider value={{ data }} {...props} />;
};

export const useEventState = () => React.useContext(EventContext);

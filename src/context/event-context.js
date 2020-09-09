import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spiner from '../components/Spiner';
import { CenterDiv } from '../styles/GlobalStyles';
import { useFetch } from '../utility/hooks/useFetch';
import { UserRequest } from '../utility/enpoints/auth';
// remove for the get event data
import { getToken } from '../auth-provider';

const EventContext = React.createContext();

export const EventProvider = (props) => {
  let { eventname } = useParams();

  let { isLoading } = useFetch(UserRequest, {
    path: '',
    body: null,
    params: {},
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  });

  const [data, setData] = useState({
    pk: '2541251245214',
    name: 'super_event',
    date: '2020-09-25T06:00:00-05:00',
    description: 'A super Event',
    url: 'https://avatars1.githubusercontent.com/u/69704720?s=200&v=4',
    banner_img:
      'https://www.outinperth.com/wp-content/uploads/2014/09/Random-FB-BANNER.jpg',
    banner_title: 'Super Even',
    template: 1,
    expoistors: [],
    sponsors: [],
    schedules: [],
  });

  useEffect(() => {
    // will fetch the data.
    setData({
      pk: '4521452415',
      name: eventname,
      date: '2020-09-25T06:00:00-05:00',
      description: 'A ULTRA Event',
      url: 'https://avatars1.githubusercontent.com/u/69704720?s=200&v=4',
      banner_img:
        'https://www.outinperth.com/wp-content/uploads/2014/09/Random-FB-BANNER.jpg',
      banner_title: 'ULTRA Even',
      template: 1,
      expoistors: [],
      sponsors: [
        {
          pk: 1,
          name: 'ASUNA',
          level: 'gold',
          web: 'https://github.com',
          logo:
            'http://localhost:8000/media/sponsors/pictures/Captura_de_Pantalla_2020-08-13_a_las_22.12.13_r1fdMqP.png',
        },
        {
          pk: 2,
          name: 'Malika Mraz',
          level: 'gold',
          web: 'https://s3.amazonaws.com/uifaces/faces/twitter/knilob/128.jpg',
          logo:
            'http://localhost:8000/media/sponsors/pictures/Captura_de_Pantalla_2020-08-19_a_las_17.52.12.png',
        },
      ],
      schedules: [],
    });
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

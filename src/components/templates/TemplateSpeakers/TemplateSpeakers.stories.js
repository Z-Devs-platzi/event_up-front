import React from 'react';

import TemplateSpeakers from '.';
import { GlobalStyle } from '../../../styles/GlobalStyles';
import TemplateWrapper from '../TemplateWrapper';
const Story = (args) => {
  const theme = {
    font: 'Arial',
    primary: '#FFD43B',
    secondary: '#125E68',
    compA: '#DBE7E8',
    compB: '#CDCDCD',
  };
  return (
    <>
      <TemplateWrapper theme={theme}>
        <GlobalStyle />
        <TemplateSpeakers {...args} />
      </TemplateWrapper>
    </>
  );
};

export const Default = Story.bind({});

Default.args = {
  event: {
    id: '213123123123123123123123sadasd',
    name: 'laurianne_hauck',
    date: '2020-09-25T06:00:00-05:00',
    description:
      'Doloribus aut doloribus ea.\nSuscipit ut atque nostrum ipsam aut repellat.',
    url: 'https://ivah.biz',
    banner_img:
      'http://localhost:8000/media/banner/pictures/Captura_de_Pantalla_2020-08-11_a_las_21.14.18.png',
    banner_title: 'Intranet',
    template: {
      id: 1,
      colors: 'JSONSTRING',
      banner:
        'http://localhost:8000/media/banner/pictures/Captura_de_Pantalla_2020-08-11_a_las_21.14.18.png',
      font: 'Comic Sans',
      layout: {
        id: 1,
        comment: 'Basic layout',
      },
    },
    sponsors: [
      {
        id: '',
        name: '',
        level: '',
        web: '',
        logo: '',
      },
      {
        id: '',
        name: '',
        level: '',
        web: '',
        logo: '',
      },
      {
        id: '',
        name: '',
        level: '',
        web: '',
        logo: '',
      },
    ],
    schedule: [
      {
        id: 1,
        title: 'Openning',
        date: '2020-09-25T06:00:00-05:00',
        expositors: [],
      },
      {
        id: 2,
        title: 'Talk 01',
        date: '2020-09-25T06:30:00-05:00',
        expositors: [
          {
            name: 'Miguel Valencia',
            bio:
              'Iure in molestiae explicabo nobis.\nNon nostrum consequuntur ratione laborum.\nSit est quos occaecati quod maiores necessitatibus harum nihil.',
            twitter: 'MiguelValencia',
            picture: 'https://api.adorable.io/avatars/197/Miguel.png',
          },
        ],
      },
      {
        id: 3,
        title: 'Talk 02',
        date: '2020-09-25T06:30:00-05:00',
        expositors: [
          {
            name: 'Steve Jobs',
            bio:
              'Iure in molestiae explicabo nobis.\nNon nostrum consequuntur ratione laborum.\nSit est quos occaecati quod maiores.',
            twitter: 'SteveJobs',
            picture: 'https://api.adorable.io/avatars/197/SteveJobs.png',
          },
        ],
      },
    ],
  },
};
Default.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: TemplateSpeakers,
  title: 'Molecule/ Templates / TemplateSpeakers',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

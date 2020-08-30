import React, { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import Button from '../Button';
import SponsorItem from '../SponsorItem';
import { CardDiv } from '../../styles/GlobalStyles';
import { CrateSponsorRequest } from '../../utility/enpoints/sponsors';

const SponsorsForm = () => {
  let [showForm, steSwoForm] = useState(false);
  let [sponsorsItems, setSponsors] = useState([{}]);

  const handlerClick = () => {
    setSponsors([{}, ...sponsorsItems]);
    steSwoForm(true);
  };
  const SaveSomeSponsor = async (sponsor_edit) => {
    if (!sponsor_edit.id) {
      const formData = new FormData();
      formData.append('name', sponsor_edit.name);
      formData.append('web', sponsor_edit.web);
      formData.append('level', sponsor_edit.level);
      formData.append('logo', sponsor_edit.logo);
      const response = await CrateSponsorRequest({
        params: {},
        body: formData,
        path: '',
      });
      console.log(response);
    }
    console.log('UPDATE STPONSOR', sponsor_edit);
  };
  return (
    <CardDiv>
      <h3>Sponsors {`${showForm}`}</h3>
      <Button buttonType='outline' onClick={handlerClick}>
        New sponsor <BiPlusCircle className='icon' />
      </Button>
      {sponsorsItems.map((item, i) => {
        return (
          <SponsorItem
            key={i}
            web_url={item.web_url}
            sponsor_name={item.sponsor_name}
            logo_url={item.logo_url}
            editState={false}
            saveSponsor={SaveSomeSponsor}
          ></SponsorItem>
        );
      })}
    </CardDiv>
  );
};

export default SponsorsForm;

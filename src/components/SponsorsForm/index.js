import React, { useState, useEffect } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';
import Button from '../Button';
import SponsorItem from '../SponsorItem';
import { CardDiv } from '../../styles/GlobalStyles';
import { CrateSponsorRequest } from '../../utility/enpoints/sponsors';
import * as auth from '../../auth-provider';
const SponsorsForm = ({ sponsors }) => {
  let [showForm, steSwoForm] = useState(false);
  let [sponsorsItems, setSponsors] = useState(sponsors);

  const handlerClick = () => {
    setSponsors([{}, ...sponsorsItems]);
    steSwoForm(true);
  };

  useEffect(() => {
    setSponsors(sponsors);
  }, [sponsors]);

  const SaveSomeSponsor = async (sponsor_edit) => {
    let token = auth.getToken();

    if (!sponsor_edit.pk) {
      console.log('SaveSomeSponsor', sponsor_edit);
      const formData = new FormData();
      formData.append('name', sponsor_edit.name);
      formData.append('web', sponsor_edit.web);
      formData.append('level', sponsor_edit.level);
      formData.append('logo', sponsor_edit.logo);

      const response = await CrateSponsorRequest({
        params: {},
        body: formData,
        path: '',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Token ${token}`,
        },
      });
      setSponsors([response, ...sponsorsItems]);
    }
    console.log('UPDATE STPONSOR', sponsor_edit);
  };
  return (
    <CardDiv>
      <h3>Sponsors {`${showForm}`}</h3>
      <Button buttonType='outline' onClick={handlerClick}>
        New sponsor <BiPlusCircle className='icon' />
      </Button>
      {sponsorsItems.length > 0 ? (
        sponsorsItems.map((item, i) => {
          return (
            <SponsorItem
              key={`${item.pk} ${i}`}
              pk={item.pk}
              web_url={item.web}
              sponsor_name={item.name}
              logo_url={item.logo}
              editState={false}
              saveSponsor={SaveSomeSponsor}
            ></SponsorItem>
          );
        })
      ) : (
        <p>Add a Sponsor</p>
      )}
    </CardDiv>
  );
};

SponsorsForm.defaultProps = {
  sponsors: [],
};

SponsorsForm.propTypes = {
  sponsors: PropTypes.array,
};
export default SponsorsForm;

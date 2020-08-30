import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SponsorRow } from '../SponsorItem/styles';
import { CenterDiv } from '../../styles/GlobalStyles';
import Avatar from '../Avatar';
import { BiEdit } from 'react-icons/bi';
import Button from '../Button';
import TextInput from '../TextInput';
import { useFormTextField } from '../../utility/hooks/useFormFields';
const SponsorItem = ({
  sponsor_name,
  logo_url,
  web_url,
  editState,
  saveSponsor,
}) => {
  let [name, setName] = useState(sponsor_name);
  let [web, setWeb] = useState(web_url);
  let [logo, setLogo] = useState(logo_url);

  let nameField = useFormTextField(name);
  const webField = useFormTextField(web_url);
  const logoField = useFormTextField(logo_url);

  const [edit, setEdit] = useState(editState);
  const [cancel, setCancel] = useState(false);

  const cancelHandler = () => {
    setEdit(false);
    setCancel(!cancel);
  };
  const editHandler = () => {
    setEdit(true);
  };
  const saveHandler = () => {
    setEdit(false);
    setName(nameField.value || name);
    setWeb(web_url.value || web);
    setLogo(logoField.value || logo);
    saveSponsor({ name, web, logo });
  };
  useEffect(() => {
    setWeb(web_url);
    setName(sponsor_name);
    setLogo(logo_url);
    // eslint-disable-next-line
  }, [cancel]);

  return (
    <>
      {!edit ? (
        <SponsorRow direction='row'>
          <Avatar src={logo} alt={`${name} logo`} />
          <div>
            <h4>{name}</h4>
            <span>{web}</span>
          </div>
          <BiEdit onClick={editHandler} className='icon' />
        </SponsorRow>
      ) : (
        <SponsorRow>
          <TextInput label={'Name'} id={'sponsor_name'} logical={nameField} />
          <TextInput
            label={'Web URL'}
            type={'url'}
            id={'sponsor_web'}
            logical={webField}
          />
          <TextInput
            label={'Logo URL'}
            id={'sponsor_web'}
            logical={logoField}
          />
          <CenterDiv direction='row'>
            <Button buttonType='outline' onClick={cancelHandler}>
              Cancel
            </Button>
            <Button buttonType='outline' onClick={saveHandler}>
              Save
            </Button>
          </CenterDiv>
        </SponsorRow>
      )}
    </>
  );
};
SponsorItem.defaultProps = {
  editState: false,
  saveSponsor: (data) => console.log(data),
};
SponsorItem.propTypes = {
  editState: PropTypes.bool,
  logo_url: PropTypes.string,
  sponsor_name: PropTypes.string,
  web_url: PropTypes.string,
  saveSponsor: PropTypes.func,
};
export default SponsorItem;

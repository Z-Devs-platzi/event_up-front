import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SponsorRow } from '../SponsorItem/styles';
import { CenterDiv } from '../../styles/GlobalStyles';
import Avatar from '../Avatar';
import { BiEdit } from 'react-icons/bi';
import Button from '../Button';
import TextInput from '../TextInput';
import FileInput from '../FileInput';
import {
  useFormTextField,
  useFormFileField,
} from '../../utility/hooks/useFormFields';
const SponsorItem = ({
  sponsor_name,
  logo_url,
  web_url,
  editState,
  saveSponsor,
  pk,
}) => {
  let [name, setName] = useState(sponsor_name);
  let [web, setWeb] = useState(web_url);
  let [logo, setLogo] = useState(logo_url);

  let nameField = useFormTextField(name);
  const webField = useFormTextField(web_url);
  const logoField = useFormFileField();

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
    setWeb(webField.value || web);

    saveSponsor({
      name: nameField.value,
      web: webField.value,
      pk,
      logo: logoField.value,
      level: 'gold',
    });
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
          <FileInput
            logical={logoField}
            label={'Logo Update'}
            id={'sponsor_web'}
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
  web_url: 'https://github.com/Z-Devs-platzi',
  sponsor_name: 'Z-devs',
  logo_url: 'https://avatars1.githubusercontent.com/u/69704720?s=200&v=4',
  saveSponsor: (data) => console.log(data),
};
SponsorItem.propTypes = {
  id: PropTypes.string,
  editState: PropTypes.bool,
  logo_url: PropTypes.string,
  sponsor_name: PropTypes.string,
  web_url: PropTypes.string,
  saveSponsor: PropTypes.func,
};
export default SponsorItem;

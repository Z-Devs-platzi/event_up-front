import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CardDiv } from '../../styles/GlobalStyles';

import TextInput from '../TextInput';
import {
  useFormTextField,
  useFormFileField,
} from '../../utility/hooks/useFormFields';
import Button from '../Button';
import TextArea from '../TextArea';
import FileInput from '../FileInput';
import InputDateTime from '../CalendarDatePicker';
const GeneralForm = ({
  event_name,
  event_description,
  saveGeneral,
  event_banner_title,
  event_banner,
  event_date,
}) => {
  let [name, setName] = useState(event_name);
  let [description, setDescription] = useState(event_description);
  let [banner_title, setBannerTitle] = useState(event_banner_title);
  let [banner, setBanner] = useState(event_banner);
  let [date, setDate] = useState(event_date);

  let nameField = useFormTextField(name);
  let desctField = useFormTextField(description);
  let bannerTitleField = useFormTextField(description);
  const bannerField = useFormFileField();
  let dateField = useFormTextField(date);
  const saveHandler = () => {
    setName(nameField.value || name);
    setDescription(desctField.value || description);
    setBannerTitle(bannerTitleField.value || banner_title);
    setBanner(bannerField.value || banner);
    setDate(dateField.value || date);

    saveGeneral({
      name: nameField.value,
      description: desctField.value,
      banner_title: bannerTitleField.value,
      banner: bannerField.value,
      date: dateField.value,
    });
  };
  return (
    <CardDiv>
      <h3>General Data </h3>
      <TextInput
        label={'Name'}
        type={'text'}
        id={'event_name'}
        logical={nameField}
      />
      <TextArea
        logical={desctField}
        id={'event_description'}
        label={'Description'}
        rows={4}
      />
      <TextInput
        label={'Banner title'}
        type={'text'}
        id={'event_banner_title'}
        logical={bannerTitleField}
      />
      <FileInput
        logical={bannerField}
        label={'Banner Background'}
        id={'event_banner'}
      />
      <InputDateTime logical={dateField} id={'event_date'} />
      <Button buttonType='outline' onClick={saveHandler}>
        Save
      </Button>
    </CardDiv>
  );
};
GeneralForm.defaultProps = {
  event_name: '',
  event_description: '',
  event_banner_title: '',
  event_date: new Date(),
  saveGeneral: (data) => console.log('Save GeneralForm', data),
};

GeneralForm.propTypes = {
  event_description: PropTypes.string,
  event_name: PropTypes.string,
  event_banner_title: PropTypes.string,
  event_banner: PropTypes.string,
  event_date: PropTypes.instanceOf(Date),
  saveGeneral: PropTypes.func,
};
export default GeneralForm;

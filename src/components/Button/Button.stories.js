import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Atoms | Button', module)
  .add('Prymary', () => (
    <Button buttonType='primary' onClick={action('click')}>
      Primary Button
    </Button>
  ))
  .add('Secondary', () => (
    <Button buttonType='secondary' onClick={action('click')}>
      Secondary Button
    </Button>
  ));

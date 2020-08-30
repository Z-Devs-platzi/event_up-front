import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const TemplateWrapper = ({ theme }) => (
  <Wrapper
    primary={theme.primary}
    secondary={theme.secondary}
    compA={theme.compA}
    compB={theme.compB}
    font={theme.font}
  >
    Aqui los componentes
  </Wrapper>
);

TemplateWrapper.propTypes = {
  theme: PropTypes.objectOf({
    font: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    compA: PropTypes.string,
    compB: PropTypes.string,
  }),
};

TemplateWrapper.defaultProps = {
  // bla: 'test',
};

export default TemplateWrapper;

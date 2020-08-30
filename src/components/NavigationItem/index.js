import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Item } from './styles';

const NavigationItem = ({ to, iconItem, label, click }) => {
  return (
    <Item>
      <Link to={to} className='link' onClick={click}>
        {iconItem}
        {label}
      </Link>
    </Item>
  );
};

NavigationItem.propTypes = {
  to: PropTypes.string.isRequired,
  click: PropTypes.func,
  iconItem: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavigationItem;

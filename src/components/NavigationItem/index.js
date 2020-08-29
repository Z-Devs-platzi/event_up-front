import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Item } from './styles';

const NavigationItem = ({ to, iconItem, label }) => {
  return (
    <Item>
      <Link to={to} className='link'>
        {iconItem}
        {label}
      </Link>
    </Item>
  );
};

NavigationItem.propTypes = {
  to: PropTypes.node.isRequired,
  iconItem: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavigationItem;

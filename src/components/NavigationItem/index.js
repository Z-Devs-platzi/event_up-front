import React from 'react';
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

export default NavigationItem;

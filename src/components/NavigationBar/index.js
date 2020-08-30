import React from 'react';
import logo from '../../assets/event_up_logo.svg';
import NavigationItem from '../NavigationItem';
import { useAuthState } from '../../context/auth-context';
import {
  BiCalendarEvent,
  BiGroup,
  BiBuildings,
  BiLogOut,
} from 'react-icons/bi';
import {
  NavigationContainer,
  NavigationHeader,
  NavigationMenu,
} from './styles';

const NavigationBar = () => {
  let { logout } = useAuthState();
  const icons = {
    event: <BiCalendarEvent className='icon' />,
    staff: <BiGroup className='icon' />,
    organization: <BiBuildings className='icon' />,
    logOut: <BiLogOut className='icon' />,
  };
  const links = [
    { label: 'Events', to: '/events', iconItem: icons.event },
    { label: 'Staff', to: '/staff', iconItem: icons.staff },
    {
      label: 'Organization',
      to: '/organization',
      iconItem: icons.organization,
    },
    { label: 'Log Out', to: '/', click: logout, iconItem: icons.logOut },
  ];
  return (
    <NavigationContainer>
      <NavigationHeader>
        <img src={logo} alt='EVENT UP' className='logo' />
      </NavigationHeader>
      <NavigationMenu>
        {links.map((link) => (
          <NavigationItem key={link.label} {...link} />
        ))}
      </NavigationMenu>
    </NavigationContainer>
  );
};

export default NavigationBar;

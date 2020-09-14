import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Tag from '../Tag';
import { Row } from './styles';
import { BiCalendarEdit, BiCalendarX, BiLinkExternal } from 'react-icons/bi';

const EventRow = ({
  eventLogo,
  eventName,
  eventUpdate,
  eventDate,
  eventTime,
  eventStatus,
}) => {
  const icons = {
    edit: <BiCalendarEdit className='icon' />,
    delete: <BiCalendarX className='icon' />,
    publish: <BiLinkExternal className='icon' />,
  };

  const links = [
    { to: `/event/${eventName}`, iconItem: icons.edit },
    { to: '/delete', iconItem: icons.delete },
    { to: '/publish', iconItem: icons.publish },
  ];

  const ListLinks = ({ to, iconItem }) => {
    return (
      <li>
        <Link to={to} className='action'>
          {iconItem}
        </Link>
      </li>
    );
  };

  return (
    <Row>
      <div className='Row__avatar'>
        <Avatar size='44px' src={eventLogo} alt={eventName} />
      </div>
      <div className='Row__title'>
        <div className='name'>{eventName}</div>
        <div className='update-time'>{eventUpdate}</div>
      </div>
      <div className='Row__date'>
        <div className='date'>{eventDate}</div>
        <div className='time'>{eventTime}</div>
      </div>
      <div className='Row__status'>
        <Tag status={eventStatus} />
      </div>
      <ul className='Row__options'>
        {links.map((link) => (
          <ListLinks key={link.to} {...link} />
        ))}
      </ul>
    </Row>
  );
};

EventRow.propTypes = {
  eventLogo: PropTypes.node.isRequired,
  eventName: PropTypes.string.isRequired,
  eventUpdate: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  eventStatus: PropTypes.oneOf(['draft', 'published', 'finished']),
};

EventRow.defaultProps = {
  eventLogo:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  eventName: 'Event name',
  eventUpdate: 'Last update',
  eventDate: 'Aug 30, 2020',
  eventTime: '11:59 PM',
  eventStatus: 'draft',
};

export default EventRow;

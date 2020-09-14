import React from 'react';
import PropTypes from 'prop-types';
import EventRow from '../EventRow';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { CenterDiv } from '../../styles/GlobalStyles';
const EventsList = ({ rows }) => {
  return (
    <CenterDiv>
      <>
        <Button>
          <Link to={'/event'}>Create New Event</Link>
        </Button>
        {rows.map((item) => {
          return (
            <EventRow
              key={item.id}
              eventLogo={item.banner_img}
              eventName={item.name}
              eventDate={item.date}
            />
          );
        })}
      </>
    </CenterDiv>
  );
};
EventsList.propTypes = {
  rows: PropTypes.array,
};

EventsList.defaultProps = {
  rows: [],
};
export default EventsList;

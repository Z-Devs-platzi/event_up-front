import React from 'react';
import { useEventState } from '../../context/event-context';
import SponsorsForm from '../../components/SponsorsForm';
const EventForms = () => {
  let { data } = useEventState();

  return (
    <section>
      <h2>{`${data.name}`}</h2>
    </section>
  );
};
export default EventForms;

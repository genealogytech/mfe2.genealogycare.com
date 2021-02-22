import React from 'react';

// Component
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// MUI
import { Container } from '@material-ui/core';

const Calendar = () => {
  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <Container maxWidth="md" component="main">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Cancer Inspection', date: '2021-02-29' },
          { title: 'General Checkup', date: '2021-02-28' },
        ]}
        eventContent={renderEventContent}
      />
    </Container>
  );
};

export default Calendar;

import React from 'react';

const FestivalCalendarContent = () => {
  return (
    <div className="w-full h-full min-h-[500px] bg-white rounded-lg overflow-hidden">
      <iframe
        src="https://calendar.google.com/calendar/u/0/embed?src=c_cde4dc8132d3ce649b15e7cf52521cd7312a95bd21c60e79e58c776ffe0212e1@group.calendar.google.com&ctz=Asia/Kolkata"
        style={{ border: 0 }}
        width="100%"
        height="100%"
        className="min-h-[500px]"
        frameBorder="0"
        scrolling="no"
        title="Festivals Calendar"
      ></iframe>
    </div>
  );
};

export default FestivalCalendarContent;

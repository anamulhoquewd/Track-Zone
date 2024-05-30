import CloclListItem from "./ClockListItem";

const CLockList = ({
  clocks,
  updateClock,
  deleteClock,
  createEvent,
  events,deleteEvent
}) => {
  if (clocks.length === 0) return <p>There is no clock, please create one</p>;

  const eventName = (id) => {
    return Object.keys(events).filter((event) => event === id);
  };

  return (
    <>
      {clocks.map((clock) => (
        <CloclListItem
          clock={clock}
          events={events[eventName(clock.id)]}
          key={clock.id}
          deleteClock={deleteClock}
          updateClock={updateClock}
          createEvent={createEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
};

export default CLockList;

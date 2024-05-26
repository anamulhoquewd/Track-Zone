import CloclListItem from "./ClockListItem";

const CLockList = ({ clocks, updateClock, deleteClock }) => {
  if (clocks.length === 0) return <p>There is no clock, please create one</p>;

  return (
    <>
      {clocks.map((clock) => (
        <CloclListItem
          clock={clock}
          key={clock.id}
          deleteClock={deleteClock}
          updateClock={updateClock}
        />
      ))}
    </>
  );
};

export default CLockList;

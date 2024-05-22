import ClockListItem from "../clock-list-item/Index";

const ClockList = ({
  localDate,
  clocks,
  updateClock,
  deleteClock,
}) => {
  return (
    <div>
      {clocks.length === 0 ? (
        <p>There is no clock, please create one</p>
      ) : (
        <div>
          {clocks.map((clock) => (
            <ClockListItem
              key={clock.id}
              clock={clock}
              updateClock={updateClock}
              deleteClock={deleteClock}
              localDate={localDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClockList;

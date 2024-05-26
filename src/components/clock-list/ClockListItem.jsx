import useClock from "../../hooks/useClock";
import ClockDispaly from "../sheared/clock-display/Index";

const CloclListItem = ({ clock, updateClock, deleteClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  if (date === null) return null;

  return (
      <ClockDispaly
        clock={clock}
        date={date}
        timezone={timezone}
        offset={offset}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
  );
};

export default CloclListItem;

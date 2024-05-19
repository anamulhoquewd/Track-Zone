import useClock from "../../hooks/useClock";
import { formatDistance } from "date-fns";
import ClockAction from "../sheared/clock-actions/Index";
import ClockDispaly from "../sheared/clock-display/Index";

const ClockListItem = ({ clock, updateClock, deleteClock, localDate }) => {
  const { date } = useClock(clock.timezone, clock.offset);

  if (!date) return null;

  return (
    <>
      <div>
        <ClockDispaly
          date={date}
          title={clock.title}
          timezone={clock.timezone}
          offset={clock.offset}
        />
        <h3>{formatDistance(localDate, date)}</h3>
        <ClockAction
          clock={clock}
          updateClock={updateClock}
          deleteClock={deleteClock}
        />
      </div>
    </>
  );
};

export default ClockListItem;

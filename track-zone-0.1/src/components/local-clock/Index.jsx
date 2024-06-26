import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockAction from "../sheared/clock-actions/Index";
import ClockDispaly from "../sheared/clock-display/Index";

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  if (!date) return null;

  return (
    <div>
      {
        <>
          <ClockDispaly
            title={clock.title}
            date={date}
            timezone={timezone}
            offset={offset}
          />
          <ClockAction
            create={true}
            updateClock={updateClock}
            clock={clock}
            createClock={createClock}
          />
        </>
      }
    </div>
  );
};

export default LocalClock;

import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockDispaly from "../sheared/clock-display/Index";

const LocaleClock = ({
  clock,
  updateClock,
  createClock,
  theme,
  handleTheme,
}) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  if (date === null) return null;

  return (
      <ClockDispaly
        clock={clock}
        date={date}
        timezone={timezone}
        offset={offset}
        local={true}
        updateClock={updateClock}
        createClock={createClock}
        theme={theme}
        handleTheme={handleTheme}
      />
  );
};

export default LocaleClock;

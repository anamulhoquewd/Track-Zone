import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";
import { TIMEZONE_OFFSET } from "../constants";

const useClock = (timezone, offset) => {
  const [localDate, setLocalDate] = useState(null);
  const [dateUTC, setDateUTC] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimezone, setLocalTimezone] = useState("");

  useEffect(() => {
    let d = new Date();
    const lo = d.getTimezoneOffset();
    d = addMinutes(d, lo);
    setLocalOffset(lo);
    setDateUTC(d);
  }, []);

  useEffect(() => {
    if (dateUTC !== null) {
      if (timezone) {
        offset = TIMEZONE_OFFSET[timezone] ?? offset;
        const newDate = addMinutes(dateUTC, offset);
        setLocalDate(newDate);
      } else {
        const newDate = addMinutes(dateUTC, -localOffset);
        setLocalDate(newDate);
        const dateStrArr = newDate.toUTCString().split(" ");
        setLocalTimezone(dateStrArr.pop());
      }
    }
  }, [dateUTC, timezone, offset]);

  return {
    date: localDate,
    utcDate: dateUTC,
    offset: offset || -localOffset,
    timezone: timezone || localTimezone,
  };
};

export default useClock;

import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";
import { TIMEZONE_OFFSET } from "../utils/timezone";

const useClock = (timezone, offset) => {
  const [utc, setUTC] = useState(null);
  const [localDate, setLocalDate] = useState(null);
  const [localTimezone, setLocalTimezone] = useState("");
  const [localOffset, setLocalOffset] = useState(0);

  const [ownOffset, setOwnOffset] = useState(offset);

  useEffect(() => {
    let d = new Date();
    const lo = d.getTimezoneOffset();
    d = addMinutes(d, lo);

    setLocalOffset(lo);
    setUTC(d);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIMEZONE_OFFSET[timezone] ?? offset;
        setOwnOffset(offset);

        const newUtc = addMinutes(utc, offset);
        setLocalDate(newUtc);
      } else {
        const newUtc = addMinutes(utc, -localOffset);
        setLocalDate(newUtc);

        const dateStrArr = newUtc.toUTCString().split(" ");
        setLocalTimezone(dateStrArr.pop());
      }
    }
  }, [utc, timezone, offset]);

  return {
    date: localDate,
    utc_date: utc,
    offset: ownOffset || -localOffset,
    timezone: timezone || localTimezone,
  };
};

export default useClock;

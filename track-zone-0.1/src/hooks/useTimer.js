import { addSeconds } from "date-fns";
import { useEffect, useState } from "react";

const useTimer = (date) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setTimer(date);
  }, [date]);

  let intervalId = null;
  useEffect(() => {
    if (!timer || intervalId !== null) return;

    intervalId = setInterval(() => {
      setTimer(addSeconds(timer, 1));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  return timer;
};

export default useTimer;

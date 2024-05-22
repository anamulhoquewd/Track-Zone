import { useState } from "react";
import LocalClock from "./components/local-clock/Index";
import strGenerator from "./utils/strGenerator";
import ClockList from "./components/clock-list/Index";

const LOCAL_CLOCK_INIT = {
  title: "",
  timezone: "",
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const updateLocalClock = (data) => {
    setLocalClock((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const createClock = (clock) => {
    clock.id = strGenerator(6);
    setClocks((prev) => [...prev, clock]);
  };

  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) {
        return updatedClock;
      }
      return clock;
    });
    setClocks(updatedClocks);
  };

  const deleteClock = (id) => {
    const updatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedClocks);
  };

  return (
    <div>
      <LocalClock
        clock={localClock}
        createClock={createClock}
        updateClock={updateLocalClock}
      />
      <hr />
      <ClockList
        localDate={localClock.date}
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
}

export default App;

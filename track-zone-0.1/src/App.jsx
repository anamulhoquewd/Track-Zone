import { useState } from "react";
import LocalClock from "./components/local-clock/Index";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
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

  

  const createClock = (data) => {
    console.log(data);
  };

  return (
    <div>
      <LocalClock
        clock={localClock}
        createClock={createClock}
        updateClock={updateLocalClock}
      />
    </div>
  );
}

export default App;

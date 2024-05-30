import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useState } from "react";
import LocaleClock from "./components/locale-clock/Index";
import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import idGenerator from "./utils";
import CLockList from "./components/clock-list/Index";

const LOCAL_CLOCK_INIT = {
  title: "Bangladesh",
  timezone: "",
  offset: 0,
  date: null,
};

const App = () => {
  const [theme, setTheme] = useState(true);
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);
  const [events, setEvents] = useState({});

  const createEvent = (event) => {
    if (!events[event.clockId]) {
      setEvents((prev) => ({
        ...prev,
        [event.clockId]: [event],
      }));
    } else {
      setEvents((prev) => ({
        ...prev,
        [event.clockId]: [...prev[event.clockId], event],
      }));
    }
  };

  const deleteEvent = (id, cid) => {
    const newEvents = Object.keys(events).filter((item) => item === cid);

    const newEvent = events[newEvents].filter((item) => item.id !== id);

    setEvents((prev) => ({
      ...prev,
      [newEvents]: newEvent,
    }));
  };

  const createClock = (data) => {
    data.id = idGenerator(6);
    setClocks((prev) => [...prev, { ...data }]);
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
    const updatedClock = clocks.filter((clock) => clock.id !== id);

    setClocks(updatedClock);
  };

  const updateLocalClock = (data) => {
    setLocalClock((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleTheme = (bool) => {
    setTheme(bool);
  };

  const darkTheme = createTheme({
    palette: {
      mode: theme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{ display: "flex", justifyContent: "center", paddingTop: 3 }}
      >
        <LocaleClock
          clock={localClock}
          updateClock={updateLocalClock}
          createClock={createClock}
          theme={theme}
          handleTheme={handleTheme}
        />
      </Container>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 3,
          gap: 2,
        }}
      >
        <CLockList
          createEvent={createEvent}
          events={events}
          clocks={clocks}
          updateClock={updateClock}
          deleteClock={deleteClock}
          deleteEvent={deleteEvent}
        />
      </Grid>
    </ThemeProvider>
  );
};

export default App;

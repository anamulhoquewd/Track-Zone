import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useState } from "react";
import useClock from "./hooks/useClock";
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
          clocks={clocks}
          updateClock={updateClock}
          deleteClock={deleteClock}
        />
      </Grid>
    </ThemeProvider>
  );
};

export default App;

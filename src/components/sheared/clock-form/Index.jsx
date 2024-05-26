import { useEffect, useState } from "react";
import { TIMEZONE_OFFSET, LOCAL_OFFSET } from "../../../constants";
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  handleClock,
  edit = false,
  onClose,
}) => {
  const [state, setState] = useState({ ...values });

  useEffect(() => {
    if (TIMEZONE_OFFSET[state.timezone]) {
      setState((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[state.timezone],
      }));
    }
  }, [state.timezone]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "offset") {
      value = Number(value) * 60;
    }

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(state);
    onClose();
  };

  return (
    <Card sx={{}}>
      <form onSubmit={handleSubmit}>
        <FormGroup
          sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}
        >
          <TextField
            label="Title / Country"
            variant="outlined"
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="timezone">Timezone</InputLabel>
            <Select
              labelId="timezone"
              onChange={handleChange}
              name="timezone"
              value={state.timezone}
              label="timezone"
              defaultValue="UTC"
            >
              <MenuItem value="UTC">UTC</MenuItem>
              <MenuItem value="GMT">GMT</MenuItem>
              {Object.keys(TIMEZONE_OFFSET).map((tiezone) => (
                <MenuItem key={tiezone} value={tiezone}>
                  {tiezone}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {(state.timezone === "GMT" || state.timezone === "UTC") && (
            <FormControl fullWidth>
              <InputLabel id="offset">Offset</InputLabel>
              <Select
                labelId="offset"
                name="offset"
                onChange={handleChange}
                value={state.offset / 60}
                label="offset"
                defaultValue="0"
              >
                {LOCAL_OFFSET().map((offset) => (
                  <MenuItem key={offset} value={offset}>
                    {offset}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <Button type="submit" variant="contained">
            {edit ? "Update" : "Create"}
          </Button>
        </FormGroup>
      </form>
    </Card>
  );
};

export default ClockForm;

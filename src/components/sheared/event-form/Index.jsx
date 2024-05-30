import { useState } from "react";
import { Card, TextField, Button, FormGroup, Input } from "@mui/material";

const EventForm = ({ handleEvent, onClose }) => {
  const [state, setState] = useState({
    title: "",
    eventTime: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEvent(state);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <FormGroup
          sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}
        >
          <TextField
            label="Title / Name"
            variant="outlined"
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
          />

          <Input
            label="Picke Date n Time"
            value={state.eventTime}
            name="eventTime"
            type="time"
            onChange={handleChange}
          />

          <Button type="submit" variant="contained">
            Create
          </Button>
        </FormGroup>
      </form>
    </Card>
  );
};

export default EventForm;

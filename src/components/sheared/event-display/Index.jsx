import {
  Box,
  Button,
  Card,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CreateEvent from "../../create-events/Index";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

const EventDisplay = ({
  createEvent,
  clock,
  events = [],
  deleteEvent,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {events.length === 0 ? (
          <p>There is no event, please create one.</p>
        ) : (
          events.map((event) => (
            <Card key={event.id} sx={{ width: 250, position: "relative" }}>
              <CardContent align="center">
                <Typography sx={{ paddingBottom: 1 }} variant="h6">
                  {event.title}
                </Typography>

                <Typography fontSize="16px" sx={{}}>
                  {"Event Time"}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ paddingBottom: 1 }}
                  fontWeight="bold"
                >
                  {event.eventTime}
                </Typography>

                <Button
                  sx={{ mt: 1 }}
                  onClick={() => deleteEvent(event.id, event.clockId)}
                  size="small"
                  variant="contained"
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <Button onClick={handleOpen} disabled={events.length > 5}>
        {events.length === 0 ? "Create Event" : "Create more"}
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <CreateEvent
            createEvent={createEvent}
            clock={clock}
            onClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
};

export default EventDisplay;

import { useState } from "react";
import useClock from "../../hooks/useClock";
import ClockDispaly from "../sheared/clock-display/Index";
import EventDisplay from "../sheared/event-display/Index";
import { Box, Modal } from "@mui/material";

const CloclListItem = ({
  clock,
  updateClock,
  deleteClock,
  createEvent,
  events,
  deleteEvent,
}) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
  const [hasEvents, setHasEvents] = useState(false);

  const handHasEventOpen = () => setHasEvents(true);
  const handHasEventClose = () => setHasEvents(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 850,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
  };

  if (date === null) return null;

  return (
    <>
      <ClockDispaly
        clock={clock}
        date={date}
        timezone={timezone}
        offset={offset}
        updateClock={updateClock}
        deleteClock={deleteClock}
        handEventOpen={handHasEventOpen}
      />
      <Modal open={hasEvents} onClose={handHasEventClose}>
        <Box sx={modalStyle}>
          <EventDisplay
            clock={clock}
            createEvent={createEvent}
            events={events}
            deleteEvent={deleteEvent}
          />
        </Box>
      </Modal>
    </>
  );
};

export default CloclListItem;

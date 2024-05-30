import idGenerator from "../../utils";
import EventForm from "../sheared/event-form/Index";

const CreateEvent = ({ clock, createEvent, onClose }) => {
  const addEvent = (data) => {
    data.id = idGenerator(6);
    data.clockId = clock.id;

    createEvent(data);
  };

  return <EventForm handleEvent={addEvent} onClose={onClose} />;
};

export default CreateEvent;

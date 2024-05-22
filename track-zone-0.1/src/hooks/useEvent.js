import { useState } from "react";
import strGenerator from "../utils/strGenerator";

const EVENTS_INIT = {
  id: "",
  text: "",
  clockId: "",
  timezone: "",
  startTime: null,
  endTime: null,
};

const useEvent = () => {
  const [state, setState] = useState({});

  const getEventsByClockId = (clockId) => {
    return Object.keys(state).filter((item) => item.startsWith(clockId));
  };

  const getEvents = (isArray = false) => {
    if (!isArray) return state;

    return Object.values(state);
  };

  const createEvent = (event) => {
    event.id = strGenerator(6);

    setState((prev) => ({
      ...prev,
      [`${event.clockId}|${event.id}`]: event,
    }));

    return event;
  };

  const deleteEvent = (id) => {
    const events = { ...state };
    delete events[id];
    setState(events);
  };

  const deleteEventByClockId = (clockId) => {
    const events = Object.keys(state).filter(
      (item) => !item.startsWith(clockId)
    );

    setState(events);
  };

  const updateEvent = (updatedEvents, id) => {
    const events = { ...state };
    events[id] = {
      ...events[id],
      ...updateEvent,
    };

    setState(events);
  };

  return {
    events: state,
    getEventsByClockId,
    getEvents,
    createEvent,
    deleteEvent,
    deleteEventByClockId,
    updateEvent,
  };
};

export default useEvent;

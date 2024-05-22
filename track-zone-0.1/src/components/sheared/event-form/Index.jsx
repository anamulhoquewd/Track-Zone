import { useState } from "react";
import strGenerator from "../../../utils/strGenerator";

const EventForm = ({ addEvent }) => {
  const [state, setState] = useState({ title: "", sTime: "", eTime: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(state);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
            value={state.title}
            placeholder="Type your own title"
          />
        </div>
        <div>
          <label htmlFor="sTime">Start Time</label>
          <input
            onChange={handleChange}
            type="time"
            name="sTime"
            id="sTime"
            value={state.sTime}
          />
        </div>
        <div>
          <label htmlFor="eTIme">End TIme</label>
          <input
            onChange={handleChange}
            type="time"
            name="eTime"
            id="eTIme"
            value={state.eTime}
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
};

export default EventForm;

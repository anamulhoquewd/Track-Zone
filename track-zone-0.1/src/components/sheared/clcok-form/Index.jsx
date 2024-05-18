import { useEffect, useState } from "react";
import {
  TIMEZONE_OFFSET,
  getOffsets,
  getTimezone,
} from "../../../utils/timezone";

const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  edit = true,
  title = true,
  handleClock,
}) => {
  const [formValues, setFormValues] = useState({ ...values });

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "offset") {
      value = Number(value) * 60;
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formValues.title}
            onChange={handleChange}
            disabled={title}
          />
        </div>
        <div>
          <label>Timezone</label>
          <select
            name="timezone"
            value={formValues.timezone}
            onChange={handleChange}
          >
            {getTimezone().map((timezone) => (
              <option key={timezone} value={timezone}>
                {timezone}
              </option>
            ))}
          </select>
        </div>
        {(formValues.timezone === "UTC" || formValues.timezone === "GMT") && (
          <div>
            <label>Offset</label>
            <select
              name="offset"
              value={formValues.offset / 60}
              onChange={handleChange}
            >
              {getOffsets().map((offset) => (
                <option key={offset} value={offset}>
                  {offset}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <button type="submit">{edit ? "Update" : "Create"}</button>
        </div>
      </form>
    </div>
  );
};

export default ClockForm;

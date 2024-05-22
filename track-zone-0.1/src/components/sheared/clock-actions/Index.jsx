import { useState } from "react";
import ClockForm from "../clcok-form/Index";

const ClockAction = ({
  create = false,
  updateClock,
  createClock,
  deleteClock,
  clock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
        {create ? (
          <button onClick={() => setIsCreate(!isCreate)}>Create</button>
        ) : (
          <button onClick={() => deleteClock(clock.id)}>Delete</button>
        )}
      </div>
      {isEdit && <ClockForm handleClock={updateClock} values={clock} />}

      {isCreate && (
        <ClockForm handleClock={createClock} title={!create} edit={false} />
      )}
    </>
  );
};

export default ClockAction;

import { useState } from "react";
import ClockForm from "../clcok-form/Index";

const ClockAction = ({ create = false, updateClock, createClock, clock }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  return (
    <>
      <div>
        <button className="py-1 px-2 border" onClick={() => setIsEdit(!isEdit)}>
          Edit
        </button>
        {create ? (
          <button
            className="py-1 px-2 border"
            onClick={() => setIsCreate(!isCreate)}
          >
            Create
          </button>
        ) : (
          <button className="py-1 px-2 border">Delete</button>
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

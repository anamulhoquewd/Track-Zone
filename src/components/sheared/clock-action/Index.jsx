// import { useState } from "react";
// import ClockForm from "../clock-form/Index";

// const ClockAction = ({ create = false, updateClock, clock }) => {
//   const [isEdit, setIsEdit] = useState(false);
//   const [isCreate, setIsCreate] = useState(false);

//   const createClock = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
//       {create ? (
//         <button onClick={() => setIsCreate(!isCreate)}>Create</button>
//       ) : (
//         <button onClickCapture={(e) => e}>Delete</button>
//       )}

//       {isEdit && (
//         <>
//           <p>Hello Im editale</p>{" "}
//           <ClockForm
//             title={false}
//             values={clock}
//             handleClock={updateClock}
//             edit={true}
//           />
//         </>
//       )}
//       {isCreate && (
//         <>
//           <p>Hello Im creatable</p> <ClockForm handleClock={createClock} />
//         </>
//       )}
//     </div>
//   );
// };

// export default ClockAction;

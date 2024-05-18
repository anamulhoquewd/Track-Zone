import { format } from "date-fns";

const ClockDispaly = ({ title, date, timezone, offset }) => {
  const offsetHor = offset / 60;
  return (
    <div>
      <h2>{`Title : ${title}`}</h2>
      <h2>{`Date: ${format(date, "dd-MM-yyyy hh:mm:ss aaaaa'm'")}`}</h2>
      <h2>{`Timezone: ${timezone}`}</h2>
      <h2>{`Offset: ${
        offsetHor < 0 ? `-${Math.abs(offsetHor)}` : `+${Math.abs(offsetHor)}`
      }`}</h2>
    </div>
  );
};

export default ClockDispaly;

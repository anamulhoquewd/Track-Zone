import useClock from "./hooks/useClock";

function App() {
  const { date, utc_date, offset, timezone } = useClock();

  console.log("UTC Date: =", utc_date);
  console.log("Date: =", date);
  console.log("Offset: =", offset);
  console.log("Timezone: =", timezone);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
}

export default App;

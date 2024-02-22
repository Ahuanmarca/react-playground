import React from "react";
import TimerIntervalOnMount from "./TimerIntervalOnMount";
import TimerTimeout from "./TimerTimeout";
import Button from "react-bootstrap/Button";

function DriftingTimers() {
  const [speed, setSpeed] = React.useState(1000);

  return (
    <>
      <h1>Drifting Timers</h1>
      <p>
        This components shows how different timers will drift from each other,
        even though both timers are set with a 1000 milliseconds delay. The
        first timer uses <code>useEffect</code> to add a{" "}
        <code>setInterval</code> on the window object when the component mounts.
        The timeout only starts once and runs for the compoment life. The second
        timer uses <code>useEffect</code> to add a <code>setTimeout</code> on
        the window object when the component mounts, and when the time state
        changes. The timeout needs to be added on every render.
      </p>
      <div>
        <Button onClick={() => setSpeed(1000)} >Seconds</Button>{" "}
        <Button onClick={() => setSpeed(1)}>Milliseconds</Button>
      </div><hr />
      <div className='mt-3'>
        <TimerIntervalOnMount speed={speed} />
        <TimerTimeout speed={speed} />
      </div>
    </>
  );
}

export default DriftingTimers;

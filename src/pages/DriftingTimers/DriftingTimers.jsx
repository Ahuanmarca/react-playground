import React from "react";
import format from "date-fns/format";
import TimerIntervalOnMount from "./TimerIntervalOnMount";
import TimerTimeout from "./TimerTimeout";
import TimerTimeNow from "./TimerTimeNow";
import Nav from 'react-bootstrap/Nav';

function DriftingTimers() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  React.useEffect(() => console.log(format(time, "hh:mm:ss")), [time]);

  return (
    <>
      <h1>Drifting Timers</h1>
      <p>
        These timers show the seconds elapsed since page load,{" "}
        <strong>or at least they are supposed to!</strong> They may drift away
        from each other, depending on the activity on your machine.
        <ul>
          <li>
            The first timer uses <code>Date.now()</code> to update it&#39;s
            value, so it won&#39;t drift.
          </li>
          <li>
            The second timer adds <code>setInterval</code> to the window. The
            event listener is added only when the component mounts.
          </li>
          <li>
            The third timer adds <code>setTimeout</code> to the window. The
            timeout must be added again with every render.
          </li>
        </ul>
      </p>
      <hr />
      <h2>Clock: {format(time, "hh:mm:ss")}</h2>
      <div className="mt-3">
        <TimerTimeNow />
        <TimerIntervalOnMount />
        <TimerTimeout />
      </div>
      <hr />
      <div>
        <p>
          Sometimes the timers quickly drift away from each other, sometimes
          they stay in sync for a long time. I believe it depends on the
          activity on your machine.
        </p>
        <p>
          <Nav.Link href="https://github.com/Ahuanmarca/react-playground/blob/7f003aa830c3238db9cc91af7c4240fb002ea1c0/src/pages/DriftingTimers/DriftingTimers.jsx" target="blank">🔗 <u>code</u></Nav.Link>
        </p>
      </div>
    </>
  );
}

export default DriftingTimers;

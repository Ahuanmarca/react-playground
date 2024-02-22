import React from "react";

function TimerDateNow() {
  const [startTime] = React.useState(Date.now());
  const [globalTime, setGlobalTime] = React.useState(Date.now() - startTime);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setGlobalTime(() =>  Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [startTime]);

  return (
    <>
      <h2>Timer with <code>Date.now()</code>: {globalTime}</h2>
    </>
  );
}

export default TimerDateNow;

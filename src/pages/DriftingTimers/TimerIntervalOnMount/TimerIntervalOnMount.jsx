import React from "react";

function TimerIntervalOnMount({ speed }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, speed);

    return () => window.clearInterval(interval);
  }, [speed]);

  return (
    <div>
      <h2>
        Timer with <code>setInterval</code>: {count}
      </h2>
      <p>
        This component adds an <code>setInterval</code> to the window object{" "}
        <strong>only then the component is mounted.</strong> A clean up function
        removes the interval when the component unmounts.
      </p>
    </div>
  );
}

export default TimerIntervalOnMount;

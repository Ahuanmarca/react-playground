import React from "react";

function TimerTimeout() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => window.clearInterval(timeout);
  }, [count]);

  return (
    <div>
      <h2>
        Timer with <code>setTimeout</code>: {count}
      </h2>
      {/* <p>
        This component adds an <code>setTimeout</code> to the window object.{" "}
        <strong>The timeout needs to be added on every render.</strong> A clean
        up function is provided to cancel the timeout when the component
        unmounts.
      </p> */}
    </div>
  );
}

export default TimerTimeout;

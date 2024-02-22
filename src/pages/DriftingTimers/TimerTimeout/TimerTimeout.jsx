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
    </div>
  );
}

export default TimerTimeout;

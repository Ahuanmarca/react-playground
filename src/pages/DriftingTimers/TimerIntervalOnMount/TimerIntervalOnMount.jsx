import React from "react";

function TimerIntervalOnMount() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>
        Timer with <code>setInterval</code>: {count}
      </h2>
    </div>
  );
}

export default TimerIntervalOnMount;

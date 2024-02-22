import React from "react";
import Nav from "react-bootstrap/Nav";

function TimerTimeout({ speed }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setCount(count + 1);
    }, speed);

    return () => window.clearInterval(timeout);
  }, [count, speed]);

  return (
    <div>
      <h2>
        Timer with <code>setTimeout</code>: {count}
      </h2>
      <p>
        <Nav.Link
          href="https://github.com/Ahuanmarca/react-playground/blob/1b1b6107f7d8c0d412ba2624cc88656df83a492e/src/pages/DriftingTimers/TimerTimeout/TimerTimeout.jsx"
          target="blank"
        >
          code
        </Nav.Link>
      </p>
      <p>
        This component adds an <code>setTimeout</code> to the window object.{" "}
        <strong>The timeout needs to be added on every render.</strong> A clean
        up function is provided to cancel the timeout when the component
        unmounts.
      </p>
    </div>
  );
}

export default TimerTimeout;

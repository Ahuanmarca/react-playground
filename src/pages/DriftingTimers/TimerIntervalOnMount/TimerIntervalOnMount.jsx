import React from "react";
import Nav from "react-bootstrap/Nav";

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
        <Nav.Link
          href="https://github.com/Ahuanmarca/react-playground/blob/1b1b6107f7d8c0d412ba2624cc88656df83a492e/src/pages/DriftingTimers/TimerIntervalOnMount/TimerIntervalOnMount.jsx"
          target="blank"
        >
          code
        </Nav.Link>
      </p>
      <p>
        This component adds an <code>setInterval</code> to the window object{" "}
        <strong>only then the component is mounted.</strong> A clean up function
        removes the interval when the component unmounts.
      </p>
    </div>
  );
}

export default TimerIntervalOnMount;

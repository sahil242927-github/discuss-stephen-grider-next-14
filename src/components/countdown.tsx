import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(30); // Initial minutes
  const [seconds, setSeconds] = useState(0); // Initial seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown); // Stop the countdown
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(countdown); // Cleanup interval on unmount
  }, [minutes, seconds]);

  // Format minutes and seconds with leading zeros
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>
        Time Remaining: {formattedMinutes}:{formattedSeconds}
      </p>
    </div>
  );
};

export default CountdownTimer;

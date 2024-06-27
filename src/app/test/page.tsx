"use client";

import CountdownTimer from "@/components/countdown";
import { useEffect, useState } from "react";

export default function Test() {
  const [num, setNum] = useState(0);

  const getRamNumber = async () => {
    const response = await fetch("http://localhost:3000/api/test");
    const { randomNumber } = await response.json();
    setNum(randomNumber);
  };
  useEffect(() => {
    getRamNumber();
    // Refresh data every 10 seconds
    //   const interval = setInterval(getRamNumber, 3000);

    //return () => clearInterval(interval);
  }, []);

  console.log(num);
  return (
    <div>
      This is a test page : {num}
      <div>{/* <CountdownTimer /> */}</div>
    </div>
  );
}

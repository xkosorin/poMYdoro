import { useEffect, useState } from "react";
import { useEffectOnce, useInterval } from "usehooks-ts";

interface TimerControllers {
  startTimer: () => void;
  resetTimer: () => void;
  stopTimer: () => void;
  setStartCount: (startCount: number) => void;
}

type TimeInterval = "ms" | "sec";

const useTimer = (
  timeInterval: TimeInterval,
  timeAmount?: number
): [number, boolean, boolean, TimerControllers] => {
  const [startCount, setStartCount] = useState(timeAmount || 0);
  const [count, setCount] = useState(timeAmount || 0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [interval, setInterval] = useState(1000);

  useEffectOnce(() => {
    switch (timeInterval) {
      case "ms":
        setInterval(10);
        break;
      case "sec":
        setInterval(1000);
        break;
    }
  });

  useEffect(() => {
    setCount(startCount);
  }, [startCount]);

  useInterval(
    () => {
      if (count <= 0) {
        setIsRunning(false);
        setIsFinished(true);
        return;
      }

      setCount((oldCount) => oldCount - interval);
    },
    isRunning ? interval : null
  );

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsFinished(false);
    setCount(startCount);
  };

  return [
    count,
    isRunning,
    isFinished,
    {
      startTimer,
      stopTimer,
      resetTimer,
      setStartCount,
    } as TimerControllers,
  ];
};

export default useTimer;

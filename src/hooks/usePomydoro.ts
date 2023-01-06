import { Dispatch, SetStateAction, useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import useTimer from "./useTimer";

interface PomodoroControllers {
  startTimer: () => void;
  resetTimer: () => void;
  stopTimer: () => void;
  setPomydoro: Dispatch<SetStateAction<number>>;
  setShortBreak: Dispatch<SetStateAction<number>>;
  setLongBreak: Dispatch<SetStateAction<number>>;
  setShortBreakCounter: Dispatch<SetStateAction<number>>;
}

const usePomydoro = (): [number, boolean, boolean, PomodoroControllers] => {
  const [pomydoro, setPomydoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(25);
  const [shortBreakCounter, setShortBreakCounter] = useState(3);

  const [
    counter,
    isRunning,
    isFinished,
    { startTimer, stopTimer, resetTimer, setStartCount },
  ] = useTimer("ms");

  useEffectOnce(() => {
    setStartCount(25000);
  });

  return [
    counter,
    isRunning,
    isFinished,
    {
      startTimer,
      resetTimer,
      stopTimer,
      setPomydoro,
      setShortBreak,
      setLongBreak,
      setShortBreakCounter,
    },
  ];
};

export default usePomydoro;

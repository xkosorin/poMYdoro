import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useBoolean, useEffectOnce } from "usehooks-ts";
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

const usePomydoro = (): [
  number,
  boolean,
  boolean,
  string,
  number,
  number,
  number,
  number,
  PomodoroControllers
] => {
  const [pomydoro, setPomydoro] = useState(15000);
  const [shortBreak, setShortBreak] = useState(5000);
  const [longBreak, setLongBreak] = useState(10000);
  const [shortBreakCounter, setShortBreakCounter] = useState(3);
  const [breakNumber, setBreakNumber] = useState(0);
  const [status, setStatus] = useState("Pomodoro");
  const { value: isBreak, toggle: toggleBreak } = useBoolean(false);

  const [
    counter,
    isRunning,
    isFinished,
    { startTimer, stopTimer, resetTimer, setStartCount },
  ] = useTimer("ms");

  useEffectOnce(() => {
    setStartCount(pomydoro);
  });

  useEffect(() => {
    if (!isFinished) return;
    toggleBreak();
  }, [isFinished]);

  useEffect(() => {
    if (isBreak) {
      setBreakNumber(
        (oldBreakNumber) => (oldBreakNumber + 1) % (shortBreakCounter + 1)
      );
    }
  }, [isBreak]);

  useEffect(() => {
    if (isBreak) {
      if (breakNumber === shortBreakCounter) {
        setStartCount(longBreak);
        setStatus("Long break");
        resetTimer();
      } else {
        setStartCount(shortBreak);
        setStatus("Short break");
        resetTimer();
      }
    } else {
      setStartCount(pomydoro);
      setStatus("Pomodoro");
      resetTimer();
    }
  }, [isBreak]);

  return [
    counter,
    isRunning,
    isFinished,
    status,
    pomydoro,
    shortBreak,
    longBreak,
    shortBreakCounter,
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

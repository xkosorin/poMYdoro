import { useState } from 'react'
import { useEffectOnce } from 'usehooks-ts';
import useTimer from './useTimer';

interface PomodoroControllers {
  startTimer: () => void
  resetTimer: () => void
  stopTimer: () => void
  setPomydoroTime: (time: number) => void
  setShortBreakTime: (time: number) => void
  setLongBreakTime: (time: number) => void
}

const usePomydoro = () : [number, boolean, PomodoroControllers] => {
  const [pomydoro, setPomydoro] = useState(6000);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(25);
  
  const [ counter, isRunning, { startTimer, stopTimer, resetTimer, setStartCount } ] =
    useTimer('ms')

  useEffectOnce(() => {
    setStartCount(60000)
  })

  const setPomydoroTime = (time: number) => {
    setPomydoro(time)
  }

  const setShortBreakTime = (time: number) => {
    setShortBreak(time)
  }

  const setLongBreakTime = (time: number) => {
    setLongBreak(time)
  }

  return [ 
    counter,
    isRunning, 
    {
      startTimer,
      resetTimer,
      stopTimer,
      setPomydoroTime,
      setShortBreakTime,
      setLongBreakTime
    }
  ]
}

export default usePomydoro
import React, { useEffect, useState } from 'react'
import { useEffectOnce, useInterval } from 'usehooks-ts'

interface TimerControllers {
  startTimer: () => void
  resetTimer: () => void
  stopTimer: () => void
  setStartCount: (startCount: number) => void
}

type TimeInterval = 'ms' | 'sec'

const useTimer = (timeInterval: TimeInterval) : [number, boolean, TimerControllers] => {
  const [startCount, setStartCount] = useState(0)
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [interval, setInterval] = useState(1000);

  useEffectOnce(() => {
    switch (timeInterval) {
      case 'ms': 
        setInterval(10)
        break;
      case 'sec':
        setInterval(1000)
        break;
    }
  })

  useEffect(() => {
    setCount(startCount)
  }, [startCount])

  useInterval(() => {
    if (count <= 0) {
      setIsRunning(false)
      return
    }

    setCount((oldCount) => oldCount - interval)
  }, isRunning ? interval : null)

  const startTimer = () => {
    setIsRunning(true)
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setCount(startCount)
  }

  return [ count, isRunning, {startTimer, stopTimer, resetTimer, setStartCount} as TimerControllers ]
}

export default useTimer
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import usePomydoro from "./hooks/usePomydoro";
import { useBoolean } from "usehooks-ts";
import Modal from "./components/Modal";
import Settings from "./components/Settings";
import { useEffect, useState } from "react";

function App() {
  const [
    counter,
    isRunning,
    isFinished,
    autostartPomydoro,
    autostartBreak,
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
      setAutostartPomydoro,
      setAutostartBreak,
    },
  ] = usePomydoro();
  const { value: isModalShown, toggle: toggleModal } = useBoolean(false);

  const toggleTimer = () => {
    isRunning ? stopTimer() : startTimer();
  };

  let res = counter / 1000;
  let sec = res % 60;
  let min = (res - sec) / 60;

  const handleSaveButton = (
    pomydoro: string,
    shortBreak: string,
    longBreak: string,
    shortBreakCounter: string,
    autostartPomydoro: boolean,
    autostartBreak: boolean
  ) => {
    setPomydoro(parseInt(pomydoro) * 1000);
    setShortBreak(parseInt(shortBreak) * 1000);
    setLongBreak(parseInt(longBreak) * 1000);
    setShortBreakCounter(parseInt(shortBreakCounter));
    setAutostartPomydoro(autostartPomydoro);
    setAutostartBreak(autostartBreak);
  };

  return (
    <>
      <Modal isShown={isModalShown} toggleModal={toggleModal}>
        <Settings
          pomydoro={pomydoro}
          shortBreak={shortBreak}
          longBreak={longBreak}
          shortBreakCounter={shortBreakCounter}
          autostartPomydoro={autostartPomydoro}
          autostartBreak={autostartBreak}
          toggleModal={toggleModal}
          handleSaveButton={handleSaveButton}
        />
      </Modal>
      <div className="bg-blue-300 md:bg-blue-100 w-screen h-screen flex justify-center items-start">
        <div className="w-full md:w-[32rem] bg-blue-300 p-10 md:rounded-xl grid grid-cols-2 gap-x-1 gap-y-4 md:mt-10">
          <div className="col-span-2 flex justify-center text-2xl">
            {status}
          </div>
          <div
            className={
              "col-span-2 flex justify-center font-bold text-3xl p-3 bg-black bg-opacity-5 rounded-md" +
              (isRunning ? " green" : " red")
            }
          >
            {("0" + Math.floor(min)).slice(-2) +
              ":" +
              ("0" + Math.floor(sec)).slice(-2)}
          </div>
          <button className="btn-primary" onClick={toggleTimer}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="btn-secondary" onClick={resetTimer}>
            Reset
          </button>
          <button className="col-span-2" onClick={toggleModal}>
            <FontAwesomeIcon icon={faGear} className="px-2" />
            Settings
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

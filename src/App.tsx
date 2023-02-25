import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import usePomydoro from "./hooks/usePomydoro";
import { useBoolean } from "usehooks-ts";
import Modal from "./components/Modal";
import { useRef } from "react";
import Settings from "./components/Settings";

function App() {
  const [
    counter,
    isRunning,
    isFinished,
    status,
    pomydoro,
    shortBreak,
    longBreak,
    shortBreakCounter,
    { startTimer, resetTimer, stopTimer },
  ] = usePomydoro();
  const { value: isModalShown, toggle: toggleModal } = useBoolean(false);

  const toggleTimer = () => {
    isRunning ? stopTimer() : startTimer();
  };

  let res = counter / 1000;
  let sec = res % 60;
  let min = (res - sec) / 60;

  function handleSaveButton() {}

  return (
    <>
      <Modal isShown={isModalShown} toggleModal={toggleModal}>
        <Settings
          pomydoro={pomydoro}
          shortBreak={shortBreak}
          longBreak={longBreak}
          shortBreakCounter={shortBreakCounter}
          toggleModal={toggleModal}
        />
        {/* <h4 className="flex justify-center text-xl font-semibold pb-5">
          Settings
        </h4>
        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-gray-700 text-sm">Pomodoro</span>
            <input
              id="pomodoro"
              type="number"
              className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
              value={pomydoro}
              ref={pomodoroRef}
            />
          </label>
          <label className="block">
            <span className="text-gray-700 text-sm">Short break</span>
            <input
              id="pomodoro"
              type="number"
              className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
              value={shortBreak}
              ref={shortBreakRef}
            />
          </label>
          <label className="block">
            <span className="text-gray-700 text-sm">Long break</span>
            <input
              id="pomodoro"
              type="number"
              className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
              value={longBreak}
              ref={longBreakRef}
            />
          </label>
          <label className="block">
            <span className="text-gray-700 text-sm">Long break interval</span>
            <input
              id="pomodoro"
              type="number"
              className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
              value={shortBreakCounter}
              ref={shortBreakCounterRef}
            />
          </label>
          <button className="btn-save" onClick={handleSaveButton}>
            Save
          </button>
          <button className="btn-disc" onClick={toggleModal}>
            Discard
          </button>
  </div> */}
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import usePomydoro from "./hooks/usePomydoro";
import { useBoolean } from "usehooks-ts";
import Modal from "./components/Modal";

function App() {
  const [
    counter,
    isRunning,
    isFinished,
    { startTimer, resetTimer, stopTimer },
  ] = usePomydoro();
  const { value: isModalShown, toggle: toggleModal } = useBoolean(false);

  const toggleTimer = () => {
    isRunning ? stopTimer() : startTimer();
  };

  let res = counter / 1000;
  let sec = res % 60;
  let min = (res - sec) / 60;

  return (
    <>
      <Modal isShown={isModalShown} toggleModal={toggleModal}>
        <h4>Are you sure you want to delete this exercise?</h4>
        <div className="flex justify-around">
          <button className="delete-button w-44">Yes</button>
          <button onClick={toggleModal} className="add-button w-44">
            No
          </button>
        </div>
      </Modal>
      <div className="bg-red-100 w-screen h-screen flex justify-center items-center">
        <div className="w-[32rem] bg-blue-300 p-10 rounded-xl grid grid-cols-2 gap-x-1 gap-y-4">
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

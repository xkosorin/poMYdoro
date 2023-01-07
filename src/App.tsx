import "./App.css";
import usePomydoro from "./hooks/usePomydoro";

function App() {
  const [
    counter,
    isRunning,
    isFinished,
    { startTimer, resetTimer, stopTimer },
  ] = usePomydoro();

  const toggleTimer = () => {
    isRunning ? stopTimer() : startTimer();
  };

  let res = counter / 1000;
  let sec = res % 60;
  let min = (res - sec) / 60;

  return (
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
        <button className="btn-primary" onClick={(_) => toggleTimer()}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="btn-secondary" onClick={(_) => resetTimer()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

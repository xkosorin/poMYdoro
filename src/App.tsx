import "./App.css";
import usePomydoro from "./hooks/usePomydoro";

function App() {
  const [counter, isRunning, isFinished, { startTimer, resetTimer }] =
    usePomydoro();

  return (
    <div className="bg-red-100 w-screen h-screen flex justify-center items-center">
      <div className="w-[32rem] bg-blue-300 p-10 rounded-xl grid grid-cols-2 gap-x-1 gap-y-4">
        <div
          className={
            "col-span-2 flex justify-center" + (isRunning ? " green" : " red")
          }
        >
          {counter}
        </div>
        <button className="btn-primary" onClick={(_) => startTimer()}>
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

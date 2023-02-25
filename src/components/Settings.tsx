import { useRef } from "react";

const Settings = (
  pomydoro: number,
  shortBreak: number,
  longBreak: number,
  shortBreakCounter: number,
  toggleModal: () => void
) => {
  const pomodoroRef = useRef(null);
  const shortBreakRef = useRef(null);
  const longBreakRef = useRef(null);
  const shortBreakCounterRef = useRef(null);

  function handleSaveButton() {}

  return (
    <>
      <h4 className="flex justify-center text-xl font-semibold pb-5">
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
      </div>
    </>
  );
};

export default Settings;

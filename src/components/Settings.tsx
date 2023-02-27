import { useCallback, useRef } from "react";

interface Props {
  pomydoro: number;
  shortBreak: number;
  longBreak: number;
  shortBreakCounter: number;
  toggleModal: () => void;
  handleSaveButton: (
    pomydoro: string,
    shortBreak: string,
    longBreak: string,
    shortBreakCounter: string
  ) => void;
}

const Settings = (props: Props) => {
  const pomodoroRef = useRef<HTMLInputElement | null>(null);
  const shortBreakRef = useRef<HTMLInputElement | null>(null);
  const longBreakRef = useRef<HTMLInputElement | null>(null);
  const shortBreakCounterRef = useRef<HTMLInputElement | null>(null);

  const handle = () => {};

  return (
    <>
      <h4 className="flex justify-center text-xl font-semibold pb-5">
        Settings
      </h4>
      <div className="grid grid-cols-1 gap-4">
        <label className="block">
          <span className="text-gray-700 text-sm">Pomodoro (sec.)</span>
          <input
            id="pomodoro"
            type="number"
            className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue={props.pomydoro / 1000}
            ref={pomodoroRef}
            min={1}
          />
        </label>
        <label className="block">
          <span className="text-gray-700 text-sm">Short break (sec.)</span>
          <input
            id="pomodoro"
            type="number"
            className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue={props.shortBreak / 1000}
            ref={shortBreakRef}
            min={1}
          />
        </label>
        <label className="block">
          <span className="text-gray-700 text-sm">Long break (sec.)</span>
          <input
            id="pomodoro"
            type="number"
            className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue={props.longBreak / 1000}
            ref={longBreakRef}
            min={1}
          />
        </label>
        <label className="block">
          <span className="text-gray-700 text-sm">Long break interval</span>
          <input
            id="pomodoro"
            type="number"
            className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue={props.shortBreakCounter}
            ref={shortBreakCounterRef}
            min={1}
          />
        </label>
        <button
          className="btn-save"
          onClick={(_) => {
            props.handleSaveButton(
              pomodoroRef.current?.value ?? "1",
              shortBreakRef.current?.value ?? "1",
              longBreakRef.current?.value ?? "1",
              shortBreakCounterRef.current?.value ?? "1"
            );
            props.toggleModal();
          }}
        >
          Save
        </button>
        <button className="btn-disc" onClick={props.toggleModal}>
          Discard
        </button>
      </div>
    </>
  );
};

export default Settings;

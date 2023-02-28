import { useRef } from "react";

interface Settings {
  pomydoro: number;
  shortBreak: number;
  longBreak: number;
  shortBreakCounter: number;
  autostartPomydoro: boolean;
  autostartBreak: boolean;
}

interface Props {
  settings: Settings;
  toggleModal: () => void;
  handleSaveButton: (
    pomydoro: string,
    shortBreak: string,
    longBreak: string,
    shortBreakCounter: string,
    autostartPomydoro: boolean,
    autostartBreak: boolean
  ) => void;
}

const Settings = (props: Props) => {
  const pomodoroRef = useRef<HTMLInputElement | null>(null);
  const shortBreakRef = useRef<HTMLInputElement | null>(null);
  const longBreakRef = useRef<HTMLInputElement | null>(null);
  const shortBreakCounterRef = useRef<HTMLInputElement | null>(null);
  const autostartPomydoroRef = useRef<HTMLInputElement | null>(null);
  const autostartBreakRef = useRef<HTMLInputElement | null>(null);

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
            defaultValue={props.settings.pomydoro / 1000}
            ref={pomodoroRef}
            min={1}
          />
        </label>
        <label className="block">
          <span className="text-gray-700 text-sm">Short break (sec.)</span>
          <input
            id="shortBreak"
            type="number"
            className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue={props.settings.shortBreak / 1000}
            ref={shortBreakRef}
            min={1}
          />
        </label>
        <label className="block">
          <span className="text-gray-700 text-sm">Long break (sec.)</span>
          <input
            id="longBreak"
            type="number"
            className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue={props.settings.longBreak / 1000}
            ref={longBreakRef}
            min={1}
          />
        </label>
        <label className="block">
          <span className="text-gray-700 text-sm">Long break interval</span>
          <input
            id="shortBreakCount"
            type="number"
            className="form-input w-full block rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue={props.settings.shortBreakCounter}
            ref={shortBreakCounterRef}
            min={1}
          />
        </label>
        <label className="grid grid-cols-2">
          <span className="text-gray-700 text-sm justify-self-start">
            Autostart PoMYdoro
          </span>
          <input
            id="autostartPomydoro"
            type="checkbox"
            className="rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0 justify-self-end"
            defaultChecked={props.settings.autostartPomydoro}
            ref={autostartPomydoroRef}
          />
        </label>
        <label className="grid grid-cols-2">
          <span className="text-gray-700 text-sm justify-self-start">
            Autostart Break
          </span>
          <input
            id="autostartBreak"
            type="checkbox"
            className="rounded-md bg-gray-100 text-center focus:border-gray-500 focus:bg-white focus:ring-0 justify-self-end"
            defaultChecked={props.settings.autostartBreak}
            ref={autostartBreakRef}
          />
        </label>
        <button
          className="btn-save"
          onClick={(_) => {
            props.handleSaveButton(
              pomodoroRef.current?.value ?? "1",
              shortBreakRef.current?.value ?? "1",
              longBreakRef.current?.value ?? "1",
              shortBreakCounterRef.current?.value ?? "1",
              autostartPomydoroRef.current?.checked ?? false,
              autostartBreakRef.current?.checked ?? false
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

import { renderHook } from "@testing-library/react-hooks";
import useTimer from "../useTimer";

describe("Tests of useTimer custom hook", () => {
  const TIME_INTERVAL = "sec";

  it("should be correctly initialized.", () => {
    const { result } = renderHook(() => useTimer(TIME_INTERVAL));

    const [count, isRunning, isFinished] = result.current;

    expect(count).toBe(0);
    expect(isRunning).toBe(false);
    expect(isFinished).toBe(false);
  });
});

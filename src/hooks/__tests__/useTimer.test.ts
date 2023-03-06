import { act, renderHook } from "@testing-library/react-hooks";
import useTimer from "../useTimer";

describe("Tests of useTimer custom hook", () => {
  const TIME_INTERVAL = "sec";
  const TIME_AMOUNT = 5;

  it("should be correctly initialized without time.", () => {
    const { result } = renderHook(() => useTimer(TIME_INTERVAL));
    const [count, isRunning, isFinished] = result.current;

    expect(count).toBe(0);
    expect(isRunning).toBe(false);
    expect(isFinished).toBe(false);
  });

  it("should be correctly initialized witho time.", () => {
    const { result } = renderHook(() => useTimer(TIME_INTERVAL, TIME_AMOUNT));
    const [count, isRunning, isFinished] = result.current;

    expect(count).toBe(5);
    expect(isRunning).toBe(false);
    expect(isFinished).toBe(false);
  });
});

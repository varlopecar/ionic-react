import { useState, useEffect, useRef } from "react";
import { formatMs } from "../utils/formatMs";
import { LapData } from "../models/LapData";

export const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [timeWhenLastStopped, setTimeWhenLastStopped] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);

  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (startTime > 0) {
      interval.current = setInterval(() => {
        setTime(() => Date.now() - startTime);
      }, 1);
    } else {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = undefined;
      }
    }
  }, [startTime, timeWhenLastStopped]);

  const start = () => {
    if (isRunning) {
      return;
    }
    setIsRunning(true);
    setStartTime(Date.now());
    if (timeWhenLastStopped > 0) {
      setStartTime((s) => s - timeWhenLastStopped);
    }
  };

  const stop = () => {
    setIsRunning(false);
    setTimeWhenLastStopped(time);
    setStartTime(0);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setTimeWhenLastStopped(0);
    setStartTime(0);
    setLaps([]);
  };

  const lap = () => {
    if (startTime === 0 || !isRunning) {
      return;
    }
    setLaps((laps) => [time, ...laps]);
  };

  let slowestLapTime: number | undefined;
  let fastestLapTime: number | undefined;

  const formattedLapData: LapData[] = laps.map((l, index) => {
    const previousLap = laps[index + 1] || 0;
    const lapTime = l - previousLap;

    if (!slowestLapTime || lapTime > slowestLapTime) {
      slowestLapTime = lapTime;
    }

    if (!fastestLapTime || lapTime < fastestLapTime) {
      fastestLapTime = lapTime;
    }

    return {
      time: formatMs(lapTime),
      lap: laps.length - index,
    };
  });

  return {
    start,
    stop,
    reset,
    lap,

    time: formatMs(time),
    isRunning,

    laps: formattedLapData,
    currentLapTime: laps[0] ? formatMs(time - laps[0]) : formatMs(time),
    hasStarted: time > 0,
    slowestLapTime: slowestLapTime ? formatMs(slowestLapTime || 0) : undefined,
    fastestLapTime: fastestLapTime ? formatMs(fastestLapTime || 0) : undefined,
  };
};

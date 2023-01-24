import { create } from "zustand";
import { LapData } from "../models/LapData";

type LapStore = {
  laps: LapData[]
  actions: {
    addLaps: (lap: LapData[]) => void;
  }
}

const useLapsStore = create<LapStore>((set) => ({
  laps: [],
  actions: {
    addLaps: (lap: LapData[]) => set((state) => ({ laps: [...state.laps, ...lap] })),
  },
}));

export const useLaps = () => useLapsStore((state) => state.laps);
export const useLapsActions = () => useLapsStore((state) => state.actions);


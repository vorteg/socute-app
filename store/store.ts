// store.ts
import { create } from "zustand";

interface State {
  darkMode: boolean;
}

const initialState: State = {
  darkMode: false,
};

const useStore = create((set, get) => ({
  ...initialState,
  toggleDarkMode: () =>
    set((state: { darkMode: any }) => ({ darkMode: !state.darkMode })),
}));

export default useStore;

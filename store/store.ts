// store.ts
import { create } from "zustand";

interface State {
  darkMode: boolean;
}

const initialState: State = {
  darkMode: false,
};

const useStore = create((set) => ({
  ...initialState,
  toggleDarkMode: () =>
    set((state: { darkMode: boolean }) => ({ darkMode: !state.darkMode })),
}));

export default useStore;

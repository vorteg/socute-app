import type { AppProps } from "next/app";
//import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes";

import { createContext } from "react";
import { createStore } from "zustand";

// create store

const store = createStore();

// create contact with react api
const StoreContext = createContext(store);

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={store}>
      {/* <NextUIProvider theme={darkTheme}> */}
      <Component {...pageProps} />
      {/* </NextUIProvider> */}
    </StoreContext.Provider>
  );
}

export default MyApp;

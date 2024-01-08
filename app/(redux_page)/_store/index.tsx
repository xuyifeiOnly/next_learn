"use client";

import { Action, State, initState, reducer } from "./AppReducer";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";

export type AppContextProps = {
  state: State;
  dispatch: Dispatch<Action>;
};

const AppContext = createContext<AppContextProps>(null!);

export function useAppContext(): AppContextProps {
  return useContext(AppContext);
}
type Prettify<T> = {
  [k in keyof T]: T[k];
};
export default function AppContextProvider({
  children,
  init,
}: {
  children: ReactNode;
  init: Partial<State>;
}) {
  const [state, dispatch] = useReducer(reducer, { ...initState, ...init });
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

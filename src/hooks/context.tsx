import { useState, createContext, ReactNode } from "react";
import { PersonObject } from "react-chat-engine-advanced";

export interface ContextInterface {
  user: PersonObject | undefined;
  setUser: (u: PersonObject | undefined) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextInterface>({
  user: undefined,
  setUser: () => {},
});

export const ContextProvider = (props: ProviderProps) => {
  // TODO: Switch default back to (undefined)
  const [user, setUser] = useState<PersonObject | undefined>(undefined);

  const value = {
    user,
    setUser,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

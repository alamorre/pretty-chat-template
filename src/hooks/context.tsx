import { useState, createContext, ReactNode } from "react";

export interface User {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  secret: string;
  avatar?: File | string;
}

export interface ContextInterface {
  user: User | undefined;
  setUser: (u: User | undefined) => void;
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
  const [user, setUser] = useState<User | undefined>(undefined);

  const value = {
    user,
    setUser,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

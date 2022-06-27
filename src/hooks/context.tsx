import { useState, createContext, ReactNode } from "react";

export interface User {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  secret: string;
}

export interface ContextInterface {
  user: User | undefined;
  setUser: (u: User) => void;
}

export const Context = createContext<ContextInterface>({
  user: undefined,
  setUser: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export const ContextProvider = (props: ContextProps) => {
  const [user, setUser] = useState<User>();

  const value = {
    user,
    setUser,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

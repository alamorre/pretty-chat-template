import { useState, createContext, ReactNode } from "react";

export interface User {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  secret: string;
  avatar?: File;
}

export interface ContextInterface {
  user: User | undefined;
  setUser: (u: User) => void;
}

const defaultUser: User = {
  email: "adam@lamorre.co",
  username: "adam@lamorre.co",
  first_name: "Adam",
  last_name: "La Morre",
  secret: "Pass1234!",
};

export const Context = createContext<ContextInterface>({
  user: undefined,
  setUser: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export const ContextProvider = (props: ContextProps) => {
  // TODO: Switch default back to (undefined)
  const [user, setUser] = useState<User>(defaultUser);

  const value = {
    user,
    setUser,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

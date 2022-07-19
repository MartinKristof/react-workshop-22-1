import { createContext } from 'react';

export type TUserContext = { nick: string; setNick: (nick: string) => void };

export const UserContext = createContext<TUserContext>({
  nick: '',
  setNick: () => {},
});

export const UserContextProvider = UserContext.Provider;

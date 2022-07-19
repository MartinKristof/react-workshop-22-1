import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const useUserContext = () => {
  const { nick, setNick } = useContext(UserContext);

  return { nick, setNick };
};

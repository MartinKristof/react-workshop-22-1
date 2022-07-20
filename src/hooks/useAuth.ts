import useLocalStorage from './useLocalStorage';

const USER_KEY = 'user';

type TUser = {
  nick: string;
};

export const useAuth = () => {
  const { setItem, getItem, removeItem } = useLocalStorage();

  const logIn = (value: string): boolean => {
    try {
      const user: TUser = {
        nick: value,
      };

      setItem(USER_KEY, user);

      return true;
    } catch (error) {
      return false;
    }
  };

  const logOut = (): boolean => {
    try {
      removeItem(USER_KEY);

      return true;
    } catch (error) {
      return false;
    }
  };

  const getUser = (): TUser | null => {
    try {
      return getItem(USER_KEY);
    } catch (error) {
      return null;
    }
  };

  return { logIn, logOut, getUser };
};

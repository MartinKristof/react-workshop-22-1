const useLocalStorage = () => {
  const setItem = (key: string, value: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Any error occured with localstorage', error);

      throw error;
    }
  };

  const getItem = (key: string): any => {
    try {
      if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key) || '');
      }

      return null;
    } catch (error) {
      console.error('Any error occured with localstorage', error);

      throw error;
    }
  };

  const removeItem = (key: string) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Any error occured with localstorage', error);

      throw error;
    }
  };

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;

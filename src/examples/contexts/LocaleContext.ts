import { createContext } from 'react';

const LocaleContext = createContext({
  locale: '',
  toggleLocale: () => {},
});

export default LocaleContext;

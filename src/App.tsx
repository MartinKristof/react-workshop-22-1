import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Posts } from './pages/Posts';
import { useState } from 'react';
import { UserContextProvider } from './contexts/UserContext';
import { Auth } from './components/Auth';
import { Layout } from './components/Layout';
import { NotFound } from './pages/NotFound';

export const App = () => {
  const [nick, setNick] = useState('');

  return (
    <UserContextProvider value={{ nick, setNick }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route
            path="posts"
            element={
              <Auth>
                <Posts />
              </Auth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

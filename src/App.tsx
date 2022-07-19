import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Posts } from './pages/Posts';
import { useState } from 'react';
import { UserContextProvider } from './contexts/UserContext';

export const App = () => {
  const [nick, setNick] = useState('');

  return (
    <UserContextProvider value={{ nick, setNick }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </UserContextProvider>
  );
};

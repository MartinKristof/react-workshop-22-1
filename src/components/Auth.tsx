import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useUserContext } from '../hooks/useUserContext';

export const Auth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { getUser } = useAuth();
  const { setNick } = useUserContext();
  const location = useLocation();
  const user = getUser();

  useEffect(() => {
    if (user) {
      setNick(user.nick);
    }
  }, [user, setNick]);

  if (user) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

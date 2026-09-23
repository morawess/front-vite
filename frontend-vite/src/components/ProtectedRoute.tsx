import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  
  // Here we would check for real authentication. 
  // As a quick substitute for the Next.js middleware, we can check for a cookie or local storage.
  // In a real Vite app, you usually manage auth state in a Context or store (like Zustand/Redux).
  
  const isLoggedIn = document.cookie.includes('isLoggedIn'); // Adjust as per your real logic

  if (!isLoggedIn) {
    // Redirigir al login si no está logueado
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

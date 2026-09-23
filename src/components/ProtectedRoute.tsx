import type React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  // Ignora el login y permite ingresar directamente al dashboard y resto de la aplicación
  return <>{children}</>;
}


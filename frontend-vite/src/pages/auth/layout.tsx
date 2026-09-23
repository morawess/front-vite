import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-[#150224] px-4">
      <Outlet />
    </div>
  )
}

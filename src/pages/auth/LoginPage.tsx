
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    document.cookie = "isLoggedIn=true; path=/; max-age=86400; SameSite=Lax"
    window.location.href = "/"
  }

  return (
    <div className="w-full max-w-[400px] rounded-[24px] bg-white p-8 shadow-2xl">
      <div className="mb-8 flex justify-center">
        <img src="/logo.svg" alt="Andromeda Studio" width={48} height={48} className="object-contain" />
      </div>
      
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-gray-700">Correo electrónico</label>
          <input
            id="email"
            type="email"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
            required
          />
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-xs font-semibold text-gray-700">Contraseña</label>
          <input
            id="password"
            type="password"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
            required
          />
        </div>

        <div className="flex justify-end mt-1">
          <Link to="/auth/forgot-password" className="text-[11px] font-medium text-gray-500 hover:text-purple-700 transition-colors">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <button
          type="submit"
          className="mt-4 mx-auto w-32 rounded-md bg-[#6b477b] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#5a3b68]"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

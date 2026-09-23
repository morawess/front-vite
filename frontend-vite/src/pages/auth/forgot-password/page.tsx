
import { useState } from "react"
import { Link } from 'react-router-dom';


export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"email" | "code" | "new_password">("email")

  return (
    <div className="w-full max-w-[400px] rounded-[24px] bg-white p-8 shadow-2xl">
      <div className="mb-6 flex justify-center">
         <img src="/logo.svg" alt="Andromeda Studio" width={48} height={48} className="object-contain" />
      </div>

      {step === "email" && (
        <form 
          className="flex flex-col gap-5 text-left" 
          onSubmit={(e) => { e.preventDefault(); setStep("code"); }}
        >
          <p className="text-xs text-gray-600 mb-2 text-center">
            Ingresá tu correo electrónico. Te enviaremos un código para recuperar tu contraseña.
          </p>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-gray-700">Correo electrónico</label>
            <input
              id="email"
              type="email"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 mx-auto w-32 rounded-md bg-[#6b477b] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#5a3b68]"
          >
            Enviar código
          </button>
          <Link to="/auth/login" className="text-[11px] font-medium text-center text-gray-500 hover:text-purple-700 transition-colors mt-2">
            Volver al inicio de sesión
          </Link>
        </form>
      )}

      {step === "code" && (
        <form 
          className="flex flex-col gap-5 text-left"
          onSubmit={(e) => { e.preventDefault(); setStep("new_password"); }}
        >
          <p className="text-xs text-center text-gray-900 mb-4 px-2">
            Hemos enviado un código al correo<br/>
            electrónico de tu cuenta.<br/>
            Una vez ingresado el sistema podrá<br/>
            cambiar tu contraseña.
          </p>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="code" className="text-xs font-semibold text-gray-700 text-center">Ingrese el código</label>
            <input
              id="code"
              type="text"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 text-center tracking-[0.2em] font-semibold"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 mx-auto w-32 rounded-md bg-[#6b477b] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#5a3b68]"
          >
            Iniciar sesión
          </button>
        </form>
      )}

      {step === "new_password" && (
        <form 
          className="flex flex-col gap-5 text-left"
          onSubmit={(e) => { e.preventDefault(); window.location.href = "/auth/login"; }}
        >
          <p className="text-xs text-gray-600 mb-2 text-center">
            Código verificado. Por favor ingresá tu nueva contraseña.
          </p>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="new_password" className="text-xs font-semibold text-gray-700">Nueva contraseña</label>
            <input
              id="new_password"
              type="password"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 mx-auto w-40 rounded-md bg-[#6b477b] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#5a3b68]"
          >
            Cambiar contraseña
          </button>
        </form>
      )}
    </div>
  )
}


import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  ClipboardList,
  Layers,
  CreditCard,
  Wallet,
  Settings,
  Bell,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Alumnos", href: "/students", icon: Users },
  { label: "Inscripciones", href: "/enrollments", icon: ClipboardList },
  { label: "Clases", href: "/crews", icon: Layers },
  { label: "Pagos", href: "/payments", icon: CreditCard },
  { label: "Caja", href: "/cash_box", icon: Wallet },
  { label: "Sistema", href: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    navigate("/auth/login")
  }

  return (
    <aside className="flex h-dvh w-60 shrink-0 flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex size-9 items-center justify-center shrink-0">
          <img src="/logo.svg" alt="Andromeda Logo" className="w-full h-full object-contain" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold tracking-wide">ANDROMEDA</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-sidebar-foreground/60">
            Dance School
          </p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
        {navItems.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
              )}
            >
              <Icon className="size-4.5 shrink-0" aria-hidden="true" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-sidebar-border px-4 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-sidebar-accent text-sm font-semibold">
              JF
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-medium">Jere Farías</p>
              <p className="truncate text-xs text-sidebar-foreground/60">
                Administrador
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="size-4.5 shrink-0" aria-hidden="true" />
            Cerrar sesión
          </button>
        </div>
      </div>
    </aside>
  )
}

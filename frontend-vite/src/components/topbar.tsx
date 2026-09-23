import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';

export function Topbar({ title }: { title: string }) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-border bg-card px-6">
      <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Buscar..."
            className="w-56 pl-9"
            aria-label="Buscar"
          />
        </div>
        <Link
          to="/alerts"
          className="relative flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Notificaciones"
        >
          <Bell className="size-4.5" aria-hidden="true" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-destructive" />
        </Link>
      </div>
    </header>
  )
}

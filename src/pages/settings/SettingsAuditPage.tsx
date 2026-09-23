
import { AppShell } from "@/components/app-shell"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function AuditoriaPage() {
  return (
    <AppShell title="Auditoría">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar evento..." className="pl-9 bg-white" />
          </div>
        </div>
        
        <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">Fecha y hora</th>
                <th className="px-4 py-3 font-medium">Usuario</th>
                <th className="px-4 py-3 font-medium">Acción</th>
                <th className="px-4 py-3 font-medium">Módulo</th>
                <th className="px-4 py-3 font-medium">Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-0 hover:bg-muted/50">
                <td className="px-4 py-3">24/05/2024 18:30</td>
                <td className="px-4 py-3">Jere Farias</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-2.5 py-0.5 text-xs font-semibold">
                    Crear
                  </span>
                </td>
                <td className="px-4 py-3">Cajas</td>
                <td className="px-4 py-3">Se registró un nuevo ingreso</td>
              </tr>
              <tr className="border-b last:border-0 hover:bg-muted/50">
                <td className="px-4 py-3">24/05/2024 16:15</td>
                <td className="px-4 py-3">Mora Wessels</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-2.5 py-0.5 text-xs font-semibold">
                    Actualizar
                  </span>
                </td>
                <td className="px-4 py-3">Alumnos</td>
                <td className="px-4 py-3">Se actualizó perfil de alumno</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  )
}

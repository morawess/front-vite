
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function RolesPage() {
  return (
    <AppShell title="Roles y permisos">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="rounded-xl border bg-white shadow-sm p-6">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Administrador</h3>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">+ Nuevo rol</Button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">Módulo</th>
                <th className="px-4 py-3 font-medium text-center">Ver</th>
                <th className="px-4 py-3 font-medium text-center">Editar</th>
                <th className="px-4 py-3 font-medium text-center">Crear</th>
                <th className="px-4 py-3 font-medium text-center">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {["Alumnos", "Inscripciones", "Crews", "Pagos", "Cajas", "Configuraciones"].map((modulo) => (
                <tr key={modulo} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="px-4 py-3 font-medium">{modulo}</td>
                  <td className="px-4 py-3 text-center"><Switch defaultChecked /></td>
                  <td className="px-4 py-3 text-center"><Switch defaultChecked /></td>
                  <td className="px-4 py-3 text-center"><Switch defaultChecked /></td>
                  <td className="px-4 py-3 text-center"><Switch defaultChecked /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  )
}

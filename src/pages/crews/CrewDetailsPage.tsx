import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from "lucide-react"

import { useParams } from 'react-router-dom';

export default function CrewDetailsPage() {
  const { id } = useParams<{ id: string }>();
  
  // Format the ID to a readable name
  const crewName = id ? id.charAt(0).toUpperCase() + id.slice(1) : '';

  return (
    <AppShell title="Crews">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="rounded-xl border bg-white p-6 shadow-sm relative">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl font-bold">Competencias: <span className="font-normal">{crewName}</span></h2>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">Activo</span>
          </div>
          
          <div className="space-y-2 text-sm text-muted-foreground mb-6">
            <p><span className="font-medium text-foreground">Profesor:</span> Jere</p>
            <p><span className="font-medium text-foreground">Día de semana:</span> Lunes y Miercoles, 19 a 20:30hs</p>
          </div>

          <div className="absolute top-6 right-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
                  Editar Crew
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Editar Crew</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center gap-4">
                    <h3 className="font-medium">Estado:</h3>
                    <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">Activo</span>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Categoría</label>
                    <Select defaultValue="premium">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="estandar">Estándar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre del Crew</label>
                    <Input defaultValue={crewName} />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Profesor/a</label>
                    <Input defaultValue="Jere" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Cupo total</label>
                      <Input type="number" defaultValue={25} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Costo</label>
                      <Input type="number" defaultValue={35000} />
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <Button className="bg-primary w-32">Guardar</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center justify-between border-t pt-6 mt-2">
            <div className="flex items-center gap-4">
              <div className="relative w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar alumno..." className="pl-9" />
              </div>
              <Select defaultValue="mes">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Mes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mes">Mayo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-sm font-medium">
              Alumnos inscriptos: 25/25
            </div>
          </div>
        </div>

        <div className="rounded-md border bg-white mt-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                <th className="px-4 py-3 font-medium">Nombre</th>
                <th className="px-4 py-3 font-medium">DNI</th>
                <th className="px-4 py-3 font-medium">Pago inscripción</th>
                <th className="px-4 py-3 font-medium">Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-0 hover:bg-muted/50">
                <td className="px-4 py-3">Mora Wessels</td>
                <td className="px-4 py-3">45.545.989</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Abonado
                  </span>
                </td>
                <td className="px-4 py-3">18/5/2025</td>
              </tr>
              <tr className="border-b last:border-0 hover:bg-muted/50">
                <td className="px-4 py-3 text-transparent select-none">-</td>
                <td className="px-4 py-3 text-transparent select-none">-</td>
                <td className="px-4 py-3 text-transparent select-none">-</td>
                <td className="px-4 py-3 text-transparent select-none">-</td>
              </tr>
              <tr className="border-b last:border-0 hover:bg-muted/50">
                <td className="px-4 py-3 text-transparent select-none">-</td>
                <td className="px-4 py-3 text-transparent select-none">-</td>
                <td className="px-4 py-3 text-transparent select-none">-</td>
                <td className="px-4 py-3 text-transparent select-none">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  )
}


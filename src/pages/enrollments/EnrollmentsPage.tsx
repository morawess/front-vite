
import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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
import { Search, User } from "lucide-react"

export default function InscripcionesPage() {
  const [activeTab, setActiveTab] = useState("recientes")

  return (
    <AppShell title="Inscripciones">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="recientes">Inscripciones recientes</TabsTrigger>
            <TabsTrigger value="alumno">Historial por alumno</TabsTrigger>
            <TabsTrigger value="grupo">Historial por grupo</TabsTrigger>
          </TabsList>

          {/* INSCRIPCIONES RECIENTES */}
          <TabsContent value="recientes" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Inscripciones recientes</h2>
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Dar de baja</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Dar de baja</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Selecciona a un estudiante (Nombre o DNI)</label>
                        <Input placeholder="Buscar por nombre o DNI" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Seleccionar el grupo</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar grupo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maneuver">Maneuver</SelectItem>
                            <SelectItem value="babymakers">Babymakers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-center mt-6">
                        <Button variant="destructive" className="w-32">Dar de baja</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">+ Nueva inscripción</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Nueva inscripción</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Selecciona a un estudiante (Nombre o DNI)</label>
                        <Input placeholder="Buscar por nombre o DNI" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Seleccionar el grupo</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar grupo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maneuver">Maneuver</SelectItem>
                            <SelectItem value="babymakers">Babymakers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-center mt-6">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-32">Inscribir</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por nombre de estudiante..." className="pl-9 bg-white" />
              </div>
              <Select defaultValue="mayo">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Mes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mayo">Mayo</SelectItem>
                  <SelectItem value="junio">Junio</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Nombre</th>
                    <th className="px-4 py-3 font-medium">Crew</th>
                    <th className="px-4 py-3 font-medium">Fecha inscripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3">Mora Wessels</td>
                    <td className="px-4 py-3">Maneuver</td>
                    <td className="px-4 py-3">18/5/2025</td>
                  </tr>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                  </tr>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                  </tr>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                  </tr>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* HISTORIAL POR ALUMNO */}
          <TabsContent value="alumno" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Historial de inscripciones</h2>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Historial por alumno
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-700">
                <User className="h-4 w-4" />
              </div>
              <span className="font-medium">Mora Wessels</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar alumno..." className="pl-9 bg-white" />
              </div>
              <Select defaultValue="mayo">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Mes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mayo">Mayo</SelectItem>
                  <SelectItem value="junio">Junio</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Crew</th>
                    <th className="px-4 py-3 font-medium">Pago inscripción</th>
                    <th className="px-4 py-3 font-medium">Fecha inscripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3">Blue</td>
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
                  </tr>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                  </tr>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                  </tr>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* HISTORIAL POR GRUPO */}
          <TabsContent value="grupo" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Historial de inscripciones</h2>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Historial por grupo
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <Select defaultValue="crew1">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Crew" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crew1">Crew 1</SelectItem>
                  <SelectItem value="crew2">Crew 2</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="cat1">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cat1">Categoría 1</SelectItem>
                  <SelectItem value="cat2">Categoría 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar alumno..." className="pl-9 bg-white" />
              </div>
              <Select defaultValue="mayo">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Mes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mayo">Mayo</SelectItem>
                  <SelectItem value="junio">Junio</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Nombre</th>
                    <th className="px-4 py-3 font-medium">DNI</th>
                    <th className="px-4 py-3 font-medium">Pago inscripción</th>
                    <th className="px-4 py-3 font-medium">Fecha inscripción</th>
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
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                    <td className="px-4 py-3 text-transparent select-none">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </AppShell>
  )
}


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
import { Search, Calendar } from "lucide-react"

export default function CajasPage() {
  const [activeTab, setActiveTab] = useState("caja-diaria")

  return (
    <AppShell title="Cajas">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="caja-diaria">Caja diaria</TabsTrigger>
            <TabsTrigger value="historial-diario">Historial de caja diaria</TabsTrigger>
            <TabsTrigger value="historial-mensual">Historial de caja mensual</TabsTrigger>
          </TabsList>

          {/* CAJA DIARIA */}
          <TabsContent value="caja-diaria" className="space-y-6">
            <h2 className="text-xl font-semibold">Caja diaria</h2>
            
            <div className="flex flex-wrap gap-4 items-start">
              <div className="flex flex-1 gap-4">
                <div className="flex-1 rounded-lg bg-muted p-4 border">
                  <p className="text-sm font-medium text-muted-foreground">Resumen de caja</p>
                  <p className="mt-1 text-2xl font-bold">$85.000</p>
                </div>
                <div className="flex-1 rounded-lg bg-muted p-4 border">
                  <p className="text-sm font-medium text-muted-foreground">Ingresos Totales</p>
                  <p className="mt-1 text-2xl font-bold">$105.000</p>
                </div>
                <div className="flex-1 rounded-lg bg-muted p-4 border">
                  <p className="text-sm font-medium text-muted-foreground">Egresos Totales</p>
                  <p className="mt-1 text-2xl font-bold">$10.000</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-primary border-primary">
                      Nueva categoría
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[400px]">
                    <DialogHeader>
                      <DialogTitle>Nueva categoría</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nombre de categoría</label>
                        <Input placeholder="Ej. Pago de cuota" />
                      </div>
                      <div className="flex justify-center mt-6">
                        <Button className="bg-primary w-32">Crear</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full justify-start">
                      Registrar movimiento
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Registrar movimiento</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 py-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Tipo</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Ingreso" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ingreso">Ingreso</SelectItem>
                            <SelectItem value="egreso">Egreso</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Fecha (dd/mm/aaaa)</label>
                        <Input type="date" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Categoría</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pago-cuota">Pago de cuota</SelectItem>
                            <SelectItem value="vestuario">Vestuario</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Monto</label>
                        <Input type="number" placeholder="$" />
                      </div>
                    </div>
                    <div className="flex justify-center mt-2">
                      <Button className="bg-primary w-40">Crear movimiento</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-medium">Últimos movimientos</h3>
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar por DNI o Nombre de estudiante..." className="pl-9 bg-white" />
                </div>
                <Select defaultValue="mes">
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Mes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mes">Este Mes</SelectItem>
                    <SelectItem value="anterior">Mes Anterior</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-md border bg-white">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                      <th className="px-4 py-3 font-medium">Fecha</th>
                      <th className="px-4 py-3 font-medium">Tipo</th>
                      <th className="px-4 py-3 font-medium">Categoría</th>
                      <th className="px-4 py-3 font-medium">Monto</th>
                      <th className="px-4 py-3 font-medium text-center">Comprobante</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b last:border-0 hover:bg-muted/50">
                      <td className="px-4 py-3">24/5/2024</td>
                      <td className="px-4 py-3">Ingreso</td>
                      <td className="px-4 py-3">Pago de cuota</td>
                      <td className="px-4 py-3 font-medium">$30.000</td>
                      <td className="px-4 py-3 text-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="link" className="text-primary h-auto p-0 underline">
                              Ver comprobante
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[400px]">
                            <DialogHeader>
                              <DialogTitle className="text-center font-normal text-muted-foreground">Comprobante</DialogTitle>
                            </DialogHeader>
                            <div className="flex flex-col items-center py-6 gap-6">
                              <div className="text-center">
                                <p className="text-sm text-muted-foreground">Categoría</p>
                                <p className="text-4xl font-bold mt-2">$30000</p>
                              </div>
                              <div className="w-full space-y-3 px-6">
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Tipo</span>
                                  <span className="font-medium">Ingreso</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Fecha</span>
                                  <span className="font-medium">24/5/2024</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Método</span>
                                  <span className="font-medium">Efectivo</span>
                                </div>
                              </div>
                              <Button className="bg-primary w-32 mt-4" variant="default">Cerrar</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </td>
                    </tr>
                    <tr className="border-b last:border-0 hover:bg-muted/50">
                      <td className="px-4 py-3 text-transparent select-none">-</td>
                      <td className="px-4 py-3 text-transparent select-none">-</td>
                      <td className="px-4 py-3 text-transparent select-none">-</td>
                      <td className="px-4 py-3 text-transparent select-none">-</td>
                      <td className="px-4 py-3 text-transparent select-none">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* HISTORIAL DIARIO */}
          <TabsContent value="historial-diario" className="space-y-6">
            <h2 className="text-xl font-semibold">Historial de caja diaria</h2>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" className="gap-2 bg-white">
                <Calendar className="h-4 w-4" />
                24 - 05 - 2024
              </Button>
              <Select defaultValue="mes">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Mes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mes">Mayo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Fecha</th>
                    <th className="px-4 py-3 font-medium">Tipo</th>
                    <th className="px-4 py-3 font-medium">Categoría</th>
                    <th className="px-4 py-3 font-medium">Monto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3">24/5/2024</td>
                    <td className="px-4 py-3">Ingreso</td>
                    <td className="px-4 py-3">Pago de cuota</td>
                    <td className="px-4 py-3 font-medium">$30.000</td>
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

          {/* HISTORIAL MENSUAL */}
          <TabsContent value="historial-mensual" className="space-y-6">
            <h2 className="text-xl font-semibold">Historial de caja mensual</h2>
            
            <div className="flex items-center gap-4">
              <Select defaultValue="mes">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Mes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mes">Mayo</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="ano">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Año" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ano">2024</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Days scroll bar mock */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2">
              {Array.from({length: 31}).map((_, i) => (
                <div key={i} className={`flex h-8 min-w-8 items-center justify-center rounded border text-xs font-medium cursor-pointer ${i === 23 ? 'border-primary text-primary bg-primary/10' : 'border-muted bg-white text-muted-foreground hover:bg-muted/50'}`}>
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="rounded-md border bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 text-left text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Fecha</th>
                    <th className="px-4 py-3 font-medium">Ingresos Totales</th>
                    <th className="px-4 py-3 font-medium">Egresos Totales</th>
                    <th className="px-4 py-3 font-medium">Total Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b last:border-0 hover:bg-muted/50">
                    <td className="px-4 py-3">24/5/2024</td>
                    <td className="px-4 py-3">$105.000</td>
                    <td className="px-4 py-3">$10.000</td>
                    <td className="px-4 py-3 font-medium">$95.000</td>
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

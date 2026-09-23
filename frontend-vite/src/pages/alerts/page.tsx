
import { Link } from 'react-router-dom';
import { AlertTriangle, AlertCircle, ArrowRight } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { alumnos } from "@/lib/alumnos-data"
import { pagosPendientes, formatMoney } from "@/lib/pagos-data"

export default function AlertsPage() {
  const alumnosSinApto = alumnos.filter((a) => !a.aptoFisico && a.estado !== "Baja")

  const totalAlertas = alumnosSinApto.length + pagosPendientes.length

  return (
    <AppShell title="Alertas">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Centro de Alertas</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Revisá y resolvé pagos pendientes y documentación atrasada.
          </p>
        </div>

        {totalAlertas === 0 ? (
          <Card className="flex flex-col items-center justify-center p-12 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <AlertCircle className="size-6" />
            </div>
            <h2 className="text-lg font-medium text-foreground">¡Todo al día!</h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm">
              No hay alertas pendientes en este momento. Todos los pagos y aptos físicos están al día.
            </p>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {/* Pagos Atrasados */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <AlertTriangle className="size-5 text-rose-600" />
                <h2 className="text-sm font-semibold text-foreground">Pagos Atrasados ({pagosPendientes.length})</h2>
              </div>
              {pagosPendientes.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {pagosPendientes.map((p) => (
                    <Card key={p.id} className="flex flex-col gap-3 p-4 border-rose-200/50 bg-rose-50/30">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-foreground">{p.alumno}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{p.concepto}</p>
                        </div>
                        <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-100">
                          {formatMoney(p.monto)}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-rose-600 font-medium">Venció el {p.vencimiento}</p>
                        <Button size="sm" variant="outline" className="h-8 gap-1.5" render={<Link to={`/payments/${p.alumnoId}`} />}>
                          Cobrar
                          <ArrowRight className="size-3.5" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground py-4 text-center">No hay pagos atrasados.</p>
              )}
            </div>

            {/* Aptos Físicos Pendientes */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <AlertCircle className="size-5 text-amber-600" />
                <h2 className="text-sm font-semibold text-foreground">Aptos Físicos Pendientes ({alumnosSinApto.length})</h2>
              </div>
              {alumnosSinApto.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {alumnosSinApto.map((a) => (
                    <Card key={a.id} className="flex flex-col gap-3 p-4 border-amber-200/50 bg-amber-50/30">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-foreground">{a.nombre} {a.apellido}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{a.crews.join(", ")}</p>
                        </div>
                        <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                          Pendiente
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-amber-600 font-medium line-clamp-1 max-w-[180px]" title={a.observacionesSalud}>
                          {a.observacionesSalud || "No presentado"}
                        </p>
                        <Button size="sm" variant="outline" className="h-8 gap-1.5" render={<Link to={`/students/${a.id}/editar`} />}>
                          Actualizar
                          <ArrowRight className="size-3.5" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground py-4 text-center">Todos los aptos físicos están al día.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  )
}

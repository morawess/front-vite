
import { useState } from "react"
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Modal } from "@/components/payments/modal"
import type { Alumno } from "@/lib/students-data"
import {
  formatMoney,
  montoConDescuento,
  pagosDeAlumno,
  pendientesDeAlumno,
  type PagoPendiente,
} from "@/lib/payments-data"

function iniciales(nombre: string, apellido: string) {
  return `${nombre[0] ?? ""}${apellido[0] ?? ""}`
}

export function HistorialAlumno({ alumno }: { alumno: Alumno }) {
  const historial = pagosDeAlumno(alumno.id)
  const pendientes = pendientesDeAlumno(alumno.id)
  const [abonar, setAbonar] = useState<PagoPendiente | null>(null)

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5">
      <Button
        variant="ghost"
        size="sm"
        className="w-fit gap-2 text-muted-foreground"
        render={<Link to="/payments" />}
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Volver a pagos
      </Button>

      <Card className="flex flex-row items-center justify-between gap-4 p-5">
        <div className="flex items-center gap-4">
          <Avatar className="size-14">
            <AvatarFallback className="bg-primary/10 text-base font-semibold text-primary">
              {iniciales(alumno.nombre, alumno.apellido)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-xs font-medium text-muted-foreground">Historial de pagos de</p>
            <h1 className="text-lg font-semibold text-foreground">
              {alumno.nombre} {alumno.apellido}
            </h1>
            <p className="text-sm text-muted-foreground">
              {alumno.crews.join(", ")} · {alumno.cuota} / mes
            </p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          {alumno.crews.join(", ")}
        </Badge>
      </Card>

      {pendientes.length > 0 && (
        <Card className="overflow-hidden border-rose-200 p-0">
          <div className="flex items-center gap-3 border-b border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            <AlertTriangle className="size-4.5 shrink-0" aria-hidden="true" />
            {pendientes.length} pago(s) atrasado(s)
          </div>
          <ul className="divide-y divide-border">
            {pendientes.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between gap-4 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{p.concepto}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.cuota} · Vence {p.vencimiento}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-foreground">
                    {formatMoney(p.monto)}
                  </span>
                  <Button size="sm" onClick={() => setAbonar(p)}>
                    Abonar
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Card className="overflow-hidden p-0">
        <div className="border-b border-border p-4">
          <h2 className="text-sm font-semibold text-foreground">Pagos realizados</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Fecha</TableHead>
              <TableHead>Concepto</TableHead>
              <TableHead className="hidden sm:table-cell">Método</TableHead>
              <TableHead className="hidden sm:table-cell text-right">Descuento</TableHead>
              <TableHead className="text-right">Pago</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historial.map((p) => (
              <TableRow key={p.id} className="hover:bg-transparent">
                <TableCell className="text-muted-foreground">{p.fecha}</TableCell>
                <TableCell className="font-medium text-foreground">
                  {p.mes} · {p.concepto}
                </TableCell>
                <TableCell className="hidden text-muted-foreground sm:table-cell">
                  {p.metodo}
                </TableCell>
                <TableCell className="hidden text-right text-muted-foreground sm:table-cell">
                  {p.descuento > 0 ? `${p.descuento}%` : "—"}
                </TableCell>
                <TableCell className="text-right font-medium text-foreground">
                  {formatMoney(montoConDescuento(p.monto, p.descuento))}
                </TableCell>
              </TableRow>
            ))}
            {historial.length === 0 && (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">
                  Sin pagos registrados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>

      <Modal
        open={abonar !== null}
        onClose={() => setAbonar(null)}
        title={abonar ? abonar.concepto : ""}
      >
        {abonar && (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault()
              setAbonar(null)
            }}
          >
            <div className="rounded-xl bg-primary/5 px-4 py-5 text-center">
              <p className="text-xs font-medium text-muted-foreground">{abonar.concepto}</p>
              <p className="text-3xl font-semibold text-primary">
                {formatMoney(abonar.monto)}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="mes">Mes</Label>
                <Input id="mes" defaultValue={abonar.mes} readOnly />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="fecha-pago">Fecha de pago</Label>
                <Input id="fecha-pago" type="date" />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full">
              Abonar {formatMoney(abonar.monto)}
            </Button>
          </form>
        )}
      </Modal>
    </div>
  )
}

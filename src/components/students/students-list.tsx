
import { useMemo, useState } from "react"
import { Link } from 'react-router-dom';
import { AlertTriangle, Plus, Search, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { alumnos, TOTAL_ALUMNOS, type EstadoAlumno } from "@/lib/students-data"

const estadoStyles: Record<EstadoAlumno, string> = {
  Activo: "bg-emerald-100 text-emerald-700",
  Pendiente: "bg-amber-100 text-amber-700",
  Baja: "bg-rose-100 text-rose-700",
}

function iniciales(nombre: string, apellido: string) {
  return `${nombre[0] ?? ""}${apellido[0] ?? ""}`
}

export function AlumnosList() {
  const [query, setQuery] = useState("")

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return alumnos
    return alumnos.filter((a) =>
      `${a.nombre} ${a.apellido} ${a.dni} ${a.crews.join(" ")}`.toLowerCase().includes(q),
    )
  }, [query])

  const pendientes = alumnos.filter((a) => !a.aptoFisico).length

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Card className="flex flex-row items-center gap-4 px-5 py-4">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Users className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-medium text-muted-foreground">Alumnos totales</p>
            <p className="text-3xl font-semibold leading-tight text-foreground">
              {TOTAL_ALUMNOS}
            </p>
          </div>
        </Card>

        <Button render={<Link to="/students/nuevo" />} size="lg" className="gap-2">
          <Plus className="size-4" aria-hidden="true" />
          Añadir alumno
        </Button>
      </div>

      {pendientes > 0 && (
        <Link
          to="/alerts"
          className="flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 transition-colors hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          aria-label="Ver alertas de aptos físicos pendientes o vencidos"
        >
          <AlertTriangle className="size-4.5 shrink-0" aria-hidden="true" />
          <p>
            <span className="font-semibold">{pendientes} alumno(s)</span> con apto físico
            pendiente o vencido. Revisá su documentación.
          </p>
        </Link>
      )}

      <Card className="overflow-hidden p-0">
        <div className="flex items-center justify-between gap-4 border-b border-border p-4">
          <h2 className="text-sm font-semibold text-foreground">Listado de alumnos</h2>
          <div className="relative w-full max-w-xs">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar alumno..."
              className="pl-9"
              aria-label="Buscar alumno"
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Alumno</TableHead>
              <TableHead className="hidden sm:table-cell">DNI</TableHead>
              <TableHead className="hidden md:table-cell">Crews</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Cuota</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtrados.map((a) => (
              <TableRow key={a.id} className="cursor-pointer">
                <TableCell>
                  <Link
                    to={`/students/${a.id}`}
                    className="flex items-center gap-3 font-medium text-foreground"
                  >
                    <Avatar className="size-9">
                      <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                        {iniciales(a.nombre, a.apellido)}
                      </AvatarFallback>
                    </Avatar>
                    <span>
                      {a.nombre} {a.apellido}
                    </span>
                  </Link>
                </TableCell>
                <TableCell className="hidden text-muted-foreground sm:table-cell">
                  {a.dni}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className="text-muted-foreground">{a.crews.join(", ")}</span>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={estadoStyles[a.estado]}>
                    {a.estado}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium text-foreground">
                  {a.cuota}
                </TableCell>
              </TableRow>
            ))}
            {filtrados.length === 0 && (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={5} className="py-10 text-center text-muted-foreground">
                  No se encontraron alumnos para “{query}”.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

import { Link } from 'react-router-dom';
import { ChevronLeft, Pencil } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Alumno, type EstadoAlumno } from "@/lib/students-data"

const estadoStyles: Record<EstadoAlumno, string> = {
  Activo: "bg-emerald-100 text-emerald-700",
  Pendiente: "bg-amber-100 text-amber-700",
  Baja: "bg-rose-100 text-rose-700",
}

function InfoSection({
  title,
  rows,
}: {
  title: string
  rows: { label: string; value: React.ReactNode }[]
}) {
  return (
    <section className="grid gap-4 border-b border-border py-6 first:pt-0 last:border-b-0 md:grid-cols-[220px_1fr]">
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.label}>
            <dt className="text-xs font-medium text-muted-foreground">{r.label}</dt>
            <dd className="mt-0.5 text-sm text-foreground">{r.value || "—"}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function AlumnoProfile({ alumno }: { alumno: Alumno }) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5">
      <div className="flex items-center gap-3">
        <Button
          render={<Link to="/students" aria-label="Volver al listado" />}
          variant="ghost"
          size="icon"
          className="shrink-0"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </Button>
        <span className="text-sm text-muted-foreground">Alumnos / Perfil</span>
      </div>

      <Card className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div className="flex items-center gap-4">
            <Avatar className="size-14">
              <AvatarFallback className="bg-primary/10 text-lg font-semibold text-primary">
                {alumno.nombre[0]}
                {alumno.apellido[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold text-foreground">
                  {alumno.nombre} {alumno.apellido}
                </h1>
                <Badge variant="secondary" className={estadoStyles[alumno.estado]}>
                  {alumno.estado}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {alumno.crews.join(", ")} · {alumno.categoria}
              </p>
            </div>
          </div>
          <Button
            render={<Link to={`/students/${alumno.id}/editar`} />}
            className="gap-2"
          >
            <Pencil className="size-4" aria-hidden="true" />
            Editar perfil
          </Button>
        </div>

        <InfoSection
          title="Datos personales"
          rows={[
            { label: "DNI", value: alumno.dni },
            { label: "Fecha de nacimiento", value: alumno.fechaNacimiento },
            { label: "Teléfono", value: alumno.telefono },
            { label: "Email", value: alumno.email },
            { label: "Dirección", value: alumno.direccion },
          ]}
        />

        <InfoSection
          title="Responsables"
          rows={[
            { label: "Responsable principal", value: alumno.responsablePrincipal },
            { label: "Teléfono del responsable", value: alumno.telefonoResponsable },
            { label: "Responsable secundario", value: alumno.responsableSecundario },
          ]}
        />

        <InfoSection
          title="Salud"
          rows={[
            {
              label: "Apto físico",
              value: (
                <Badge
                  variant="secondary"
                  className={
                    alumno.aptoFisico
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-rose-100 text-rose-700"
                  }
                >
                  {alumno.aptoFisico ? "Presentado" : "Pendiente"}
                </Badge>
              ),
            },
            { label: "Fecha apto físico", value: alumno.fechaAptoFisico },
            { label: "Obra social", value: alumno.obraSocial },
            { label: "N° de afiliado", value: alumno.numeroAfiliado },
            { label: "Observaciones", value: alumno.observacionesSalud },
          ]}
        />

        <InfoSection
          title="Competencias"
          rows={[
            { label: "Crews", value: alumno.crews.join(", ") },
            { label: "Categoría / cuota", value: alumno.categoria },
            {
              label: "Apto para competir",
              value: (
                <Badge
                  variant="secondary"
                  className={
                    alumno.aptoCompetir
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }
                >
                  {alumno.aptoCompetir ? "Sí" : "No"}
                </Badge>
              ),
            },
            { label: "Cuota mensual", value: alumno.cuota },
          ]}
        />
      </Card>
    </div>
  )
}

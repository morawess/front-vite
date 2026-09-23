
import { useState } from "react"
import { Link } from 'react-router-dom';
import { ChevronRight, Plus } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Modal } from "@/components/payments/modal"
import { RegistrarPago } from "@/components/payments/register-payment"
import { alumnos } from "@/lib/students-data"
import {
  CREWS,
  formatMoney,
  montoPorCrew,
  pendientesDeCrew,
  type Crew,
} from "@/lib/payments-data"

function iniciales(nombre: string, apellido: string) {
  return `${nombre[0] ?? ""}${apellido[0] ?? ""}`
}

export function PagosView() {
  const [crew, setCrew] = useState<Crew>("Recreativo")
  const [openRegistrar, setOpenRegistrar] = useState(false)

  const alumnosCrew = alumnos.filter((a) => a.crews.includes(crew) && a.estado !== "Baja")
  const pendientes = pendientesDeCrew(crew)
  const pendientesIds = new Set(pendientes.map((p) => p.alumnoId))

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-lg font-semibold text-foreground">Pagos</h1>
          <p className="text-sm text-muted-foreground">
            Cuotas y cobros por crew y estudiante.
          </p>
        </div>
        <Button size="lg" className="gap-2" onClick={() => setOpenRegistrar(true)}>
          <Plus className="size-4" aria-hidden="true" />
          Registrar un nuevo pago
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {CREWS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCrew(c)}
            className={`flex min-w-40 flex-1 items-center justify-between rounded-xl border px-4 py-3 text-left transition-colors ${
              crew === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-primary/40"
            }`}
            aria-pressed={crew === c}
          >
            <span>
              <span className="block text-sm font-semibold">{c}</span>
              <span
                className={`block text-xs ${crew === c ? "text-primary-foreground/80" : "text-muted-foreground"}`}
              >
                {formatMoney(montoPorCrew[c])} / mes
              </span>
            </span>
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        ))}
      </div>

      <Card className="grid grid-cols-3 gap-3 p-4">
        <Stat label="Alumnos" value={String(alumnosCrew.length)} />
        <Stat label="Al día" value={String(alumnosCrew.length - pendientes.length)} tone="ok" />
        <Stat label="Pendientes" value={String(pendientes.length)} tone="warn" />
      </Card>

      <Card className="overflow-hidden p-0">
        <div className="border-b border-border p-4">
          <h2 className="text-sm font-semibold text-foreground">{crew}</h2>
          <p className="text-xs text-muted-foreground">Estudiantes del crew</p>
        </div>
        <ul className="divide-y divide-border">
          {alumnosCrew.map((a) => {
            const debe = pendientesIds.has(a.id)
            return (
              <li
                key={a.id}
                className="flex items-center justify-between gap-4 px-4 py-3"
              >
                <Link
                  to={`/payments/${a.id}`}
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
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className={
                      debe
                        ? "bg-rose-100 text-rose-700"
                        : "bg-emerald-100 text-emerald-700"
                    }
                  >
                    {debe ? "Atrasado" : "Al día"}
                  </Badge>
                  <Button
                    size="sm"
                    variant={debe ? "default" : "outline"}
                    render={<Link to={`/payments/${a.id}`} />}
                  >
                    {debe ? "Cobrar" : "Ver historial"}
                  </Button>
                </div>
              </li>
            )
          })}
          {alumnosCrew.length === 0 && (
            <li className="px-4 py-10 text-center text-sm text-muted-foreground">
              No hay estudiantes activos en este crew.
            </li>
          )}
        </ul>
      </Card>

      <Modal
        open={openRegistrar}
        onClose={() => setOpenRegistrar(false)}
        title="Registrar un nuevo pago"
      >
        <RegistrarPago onDone={() => setOpenRegistrar(false)} />
      </Modal>
    </div>
  )
}

function Stat({
  label,
  value,
  tone = "default",
}: {
  label: string
  value: string
  tone?: "default" | "ok" | "warn"
}) {
  const toneStyles = {
    default: "text-foreground",
    ok: "text-emerald-600",
    warn: "text-rose-600",
  }[tone]
  return (
    <div className="rounded-xl bg-muted/40 px-4 py-3 text-center">
      <p className={`text-2xl font-semibold ${toneStyles}`}>{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

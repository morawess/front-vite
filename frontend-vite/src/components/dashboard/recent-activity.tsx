import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const payments = [
  { name: "Mora Wessels", concept: "Recreativo · Cuota 8", amount: "$30.000", status: "Pagado" },
  { name: "Jere Farías", concept: "Competencia · Cuota 8", amount: "$45.000", status: "Pagado" },
  { name: "Lucía Gómez", concept: "Elite · Cuota 8", amount: "$60.000", status: "Pendiente" },
  { name: "Tomás Ruiz", concept: "Recreativo · Cuota 8", amount: "$30.000", status: "Pendiente" },
]

const enrollments = [
  { name: "Valentina Díaz", crew: "Competencia", date: "Hoy" },
  { name: "Martín Sosa", crew: "Recreativo", date: "Ayer" },
  { name: "Camila Torres", crew: "Elite", date: "12 ago" },
]

export function RecentActivity() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Pagos recientes</h2>
          <span className="text-xs text-muted-foreground">Agosto 2025</span>
        </div>
        <ul className="mt-4 divide-y divide-border">
          {payments.map((p) => (
            <li key={p.name} className="flex items-center justify-between gap-3 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{p.name}</p>
                <p className="truncate text-xs text-muted-foreground">{p.concept}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">{p.amount}</span>
                <Badge
                  variant={p.status === "Pagado" ? "secondary" : "outline"}
                  className={
                    p.status === "Pagado"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }
                >
                  {p.status}
                </Badge>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">
            Inscripciones recientes
          </h2>
          <span className="text-xs text-muted-foreground">Últimos días</span>
        </div>
        <ul className="mt-4 divide-y divide-border">
          {enrollments.map((e) => (
            <li key={e.name} className="flex items-center justify-between gap-3 py-3">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {e.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{e.name}</p>
                  <p className="text-xs text-muted-foreground">Crew {e.crew}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{e.date}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

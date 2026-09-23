import { CalendarClock, AlertTriangle, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const stats = [
  {
    label: "Cierre de caja",
    value: "$150.000",
    //caption: "Último cierre: 12/06/2024",
    icon: CalendarClock,
    tone: "primary" as const,
  },
  {
    label: "Pagos pendientes",
    value: "45",
    //caption: "Requieren seguimiento",
    icon: AlertTriangle,
    tone: "warning" as const,
  },
  {
    label: "Alumnos activos",
    value: "225",
    //caption: "+12 este mes",
    icon: Users,
    tone: "neutral" as const,
  },
]

const toneStyles = {
  primary: "bg-primary/10 text-primary",
  warning: "bg-amber-100 text-amber-700",
  neutral: "bg-secondary text-secondary-foreground",
}

export function StatCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
              </div>
              <div
                className={cn(
                  "flex size-11 items-center justify-center rounded-xl",
                  toneStyles[stat.tone],
                )}
              >
                <Icon className="size-5" aria-hidden="true" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

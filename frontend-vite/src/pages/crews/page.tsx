
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { Link } from 'react-router-dom';

const crews = [
  { id: "maneuver", name: "Maneuver", categoria: "Premium", color: "bg-[#DCD0E1]" },
  { id: "babymakers", name: "Babymakers", categoria: "Estándar", color: "bg-[#DCD0E1]" },
  { id: "killa", name: "Killa", categoria: "Principiante", color: "bg-[#DCD0E1]" },
  { id: "nova", name: "Nova", categoria: "", color: "bg-[#DCD0E1]" },
  { id: "academy", name: "Academy", categoria: "", color: "bg-[#DCD0E1]" },
  { id: "chicas-plasticas", name: "Chicas plásticas", categoria: "", color: "bg-[#DCD0E1]" },
]

export default function CrewsPage() {
  return (
    <AppShell title="Clases">
      <div className="mx-auto flex max-w-6xl gap-8">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            {crews.map((crew) => (
              <Link 
                key={crew.id} 
                to={`/crews/${crew.id}`}
                className={`relative flex flex-col justify-between rounded-xl p-6 h-32 transition-transform hover:scale-[1.02] ${crew.color}`}
              >
                <div>
                  <h3 className="font-semibold text-lg">{crew.name}</h3>
                  {crew.categoria && (
                    <p className="text-sm text-foreground/70">{crew.categoria}</p>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <ArrowUpRight className="h-5 w-5 text-foreground/50" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-64 shrink-0 space-y-4">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="font-semibold mb-4 text-sm text-muted-foreground">Cupos y tarifas</h3>
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary">
                Modificar cupos
              </Button>
              <Button variant="outline" className="w-full bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary">
                Modificar tarifas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

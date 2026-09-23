import { Construction } from "lucide-react"
import { AppShell } from "@/components/app-shell"
import { Card } from "@/components/ui/card"

export function ComingSoon({ title }: { title: string }) {
  return (
    <AppShell title={title}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Card className="flex flex-col items-center justify-center gap-3 p-16 text-center">
          <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Construction className="size-6" aria-hidden="true" />
          </span>
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Esta sección está en construcción. Se implementará en una próxima
            entrega del panel de Andromeda Studio.
          </p>
        </Card>
      </div>
    </AppShell>
  )
}

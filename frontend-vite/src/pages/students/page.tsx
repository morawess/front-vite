import { AppShell } from "@/components/app-shell"
import { AlumnosList } from "@/components/alumnos/alumnos-list"

export default function AlumnosPage() {
  return (
    <AppShell title="Alumnos">
      <AlumnosList />
    </AppShell>
  )
}

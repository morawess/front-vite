import { AppShell } from "@/components/app-shell"
import { AlumnosList } from "@/components/students/students-list"

export default function AlumnosPage() {
  return (
    <AppShell title="Alumnos">
      <AlumnosList />
    </AppShell>
  )
}

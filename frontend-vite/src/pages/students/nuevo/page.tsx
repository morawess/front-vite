import { AppShell } from "@/components/app-shell"
import { AlumnoForm } from "@/components/alumnos/alumno-form"

export default function NuevoAlumnoPage() {
  return (
    <AppShell title="Alumnos">
      <AlumnoForm />
    </AppShell>
  )
}

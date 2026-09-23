import { AppShell } from "@/components/app-shell"
import { AlumnoForm } from "@/components/students/student-form"
import { getAlumno } from "@/lib/students-data"

import { useParams } from 'react-router-dom';

export default function StudentEditPage() {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div>Not found</div>
  const alumno = getAlumno(id)
  if (!alumno) return <div>Not found</div>

  return (
    <AppShell title="Alumnos">
      <AlumnoForm alumno={alumno} />
    </AppShell>
  )
}


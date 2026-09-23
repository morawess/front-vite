import { AppShell } from "@/components/app-shell"
import { AlumnoProfile } from "@/components/students/student-profile"
import { getAlumno } from "@/lib/students-data"

import { useParams } from 'react-router-dom';

export default function StudentDetailsPage() {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div>Not found</div>
  const alumno = getAlumno(id)
  if (!alumno) return <div>Not found</div>

  return (
    <AppShell title="Alumnos">
      <AlumnoProfile alumno={alumno} />
    </AppShell>
  )
}


import { AppShell } from "@/components/app-shell"
import { HistorialAlumno } from "@/components/pagos/historial-alumno"
import { getAlumno } from "@/lib/alumnos-data"

import { useParams } from 'react-router-dom';

export default function Page() {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div>Not found</div>
  const alumno = getAlumno(id)
  if (!alumno) return <div>Not found</div>

  return (
    <AppShell title="Pagos">
      <HistorialAlumno alumno={alumno} />
    </AppShell>
  )
}

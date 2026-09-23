import { AppShell } from "@/components/app-shell"
import { HistorialAlumno } from "@/components/payments/student-payment-history"
import { getAlumno } from "@/lib/students-data"

import { useParams } from 'react-router-dom';

export default function PaymentDetailsPage() {
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


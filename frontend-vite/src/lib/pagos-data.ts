export type Crew = "Recreativo" | "Competencia" | "Elite"

export type EstadoPago = "Al día" | "Pendiente" | "Atrasado"

export type MetodoPago = "Efectivo" | "Transferencia" | "Débito" | "Crédito"

export type Pago = {
  id: string
  alumnoId: string
  alumno: string
  crew: Crew
  concepto: string
  mes: string
  fecha: string
  monto: number
  descuento: number
  metodo: MetodoPago
  estado: EstadoPago
}

export type PagoPendiente = {
  id: string
  alumnoId: string
  alumno: string
  crew: Crew
  concepto: string
  mes: string
  vencimiento: string
  monto: number
  cuota: string
}

export const CREWS: Crew[] = ["Recreativo", "Competencia", "Elite"]

export const montoPorCrew: Record<Crew, number> = {
  Recreativo: 30000,
  Competencia: 45000,
  Elite: 60000,
}

export const pagos: Pago[] = [
  {
    id: "p-001",
    alumnoId: "mora-wessels",
    alumno: "Mora Wessels",
    crew: "Recreativo",
    concepto: "Cuota mensual",
    mes: "Julio",
    fecha: "2026-07-05",
    monto: 30000,
    descuento: 20,
    metodo: "Transferencia",
    estado: "Al día",
  },
  {
    id: "p-002",
    alumnoId: "mora-wessels",
    alumno: "Mora Wessels",
    crew: "Recreativo",
    concepto: "Cuota mensual",
    mes: "Junio",
    fecha: "2026-06-04",
    monto: 30000,
    descuento: 20,
    metodo: "Efectivo",
    estado: "Al día",
  },
  {
    id: "p-003",
    alumnoId: "vanesa-alcaraz",
    alumno: "Vanesa Alcaraz",
    crew: "Competencia",
    concepto: "Cuota mensual",
    mes: "Julio",
    fecha: "2026-07-08",
    monto: 45000,
    descuento: 0,
    metodo: "Débito",
    estado: "Al día",
  },
  {
    id: "p-004",
    alumnoId: "jere-farias",
    alumno: "Jere Farías",
    crew: "Elite",
    concepto: "Cuota mensual",
    mes: "Julio",
    fecha: "2026-07-03",
    monto: 60000,
    descuento: 10,
    metodo: "Transferencia",
    estado: "Al día",
  },
  {
    id: "p-005",
    alumnoId: "tomas-ruiz",
    alumno: "Tomás Ruiz",
    crew: "Recreativo",
    concepto: "Cuota mensual",
    mes: "Julio",
    fecha: "2026-07-06",
    monto: 30000,
    descuento: 0,
    metodo: "Efectivo",
    estado: "Al día",
  },
]

export const pagosPendientes: PagoPendiente[] = [
  {
    id: "pp-001",
    alumnoId: "mora-wessels",
    alumno: "Mora Wessels",
    crew: "Recreativo",
    concepto: "Recreativo - Agosto",
    mes: "Agosto",
    vencimiento: "2026-08-10",
    monto: 30000,
    cuota: "Cuota 6",
  },
  {
    id: "pp-002",
    alumnoId: "mora-wessels",
    alumno: "Mora Wessels",
    crew: "Recreativo",
    concepto: "Recreativo - Septiembre",
    mes: "Septiembre",
    vencimiento: "2026-09-10",
    monto: 30000,
    cuota: "Cuota 7",
  },
  {
    id: "pp-003",
    alumnoId: "lucia-gomez",
    alumno: "Lucía Gómez",
    crew: "Recreativo",
    concepto: "Recreativo - Agosto",
    mes: "Agosto",
    vencimiento: "2026-08-10",
    monto: 30000,
    cuota: "Cuota 6",
  },
  {
    id: "pp-004",
    alumnoId: "camila-torres",
    alumno: "Camila Torres",
    crew: "Elite",
    concepto: "Elite - Agosto",
    mes: "Agosto",
    vencimiento: "2026-08-10",
    monto: 60000,
    cuota: "Cuota 6",
  },
]

export function formatMoney(n: number): string {
  return `$${n.toLocaleString("es-AR")}`
}

export function montoConDescuento(monto: number, descuento: number): number {
  return Math.round(monto * (1 - descuento / 100))
}

export function pagosDeAlumno(alumnoId: string): Pago[] {
  return pagos.filter((p) => p.alumnoId === alumnoId)
}

export function pendientesDeAlumno(alumnoId: string): PagoPendiente[] {
  return pagosPendientes.filter((p) => p.alumnoId === alumnoId)
}

export function pendientesDeCrew(crew: Crew): PagoPendiente[] {
  return pagosPendientes.filter((p) => p.crew === crew)
}

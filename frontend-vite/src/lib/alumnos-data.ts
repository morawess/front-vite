export type EstadoAlumno = "Activo" | "Baja" | "Pendiente"

export type Alumno = {
  id: string
  nombre: string
  apellido: string
  dni: string
  fechaNacimiento: string
  telefono: string
  email: string
  direccion: string
  estado: EstadoAlumno
  // Responsables
  responsablePrincipal: string
  telefonoResponsable: string
  responsableSecundario: string
  // Salud
  aptoFisico: boolean
  fechaAptoFisico: string
  obraSocial: string
  numeroAfiliado: string
  observacionesSalud: string
  // Competencias
  crews: string[]
  categoria: string
  aptoCompetir: boolean
  cuota: string
}

export const alumnos: Alumno[] = [
  {
    id: "mora-wessels",
    nombre: "Mora",
    apellido: "Wessels",
    dni: "45.789.123",
    fechaNacimiento: "2010-03-14",
    telefono: "351 555 1234",
    email: "mora.wessels@gmail.com",
    direccion: "Av. Colón 1234, Córdoba",
    estado: "Activo",
    responsablePrincipal: "Laura Wessels",
    telefonoResponsable: "351 555 9876",
    responsableSecundario: "Diego Wessels",
    aptoFisico: true,
    fechaAptoFisico: "2025-03-10",
    obraSocial: "OSDE",
    numeroAfiliado: "60034567/01",
    observacionesSalud: "Sin observaciones relevantes.",
    crews: ["Recreativo", "Competencia"],
    categoria: "Cuota 8",
    aptoCompetir: true,
    cuota: "$30.000",
  },
  {
    id: "vanesa-alcaraz",
    nombre: "Vanesa",
    apellido: "Alcaraz",
    dni: "44.123.987",
    fechaNacimiento: "2009-07-22",
    telefono: "351 555 2233",
    email: "vanesa.alcaraz@gmail.com",
    direccion: "Bv. San Juan 450, Córdoba",
    estado: "Activo",
    responsablePrincipal: "Marta Alcaraz",
    telefonoResponsable: "351 555 1122",
    responsableSecundario: "",
    aptoFisico: true,
    fechaAptoFisico: "2025-02-18",
    obraSocial: "Apross",
    numeroAfiliado: "22045678/00",
    observacionesSalud: "Alergia a la penicilina.",
    crews: ["Competencia"],
    categoria: "Cuota 8",
    aptoCompetir: true,
    cuota: "$45.000",
  },
  {
    id: "jere-farias",
    nombre: "Jere",
    apellido: "Farías",
    dni: "43.556.221",
    fechaNacimiento: "2008-11-05",
    telefono: "351 555 4455",
    email: "jere.farias@gmail.com",
    direccion: "Calle Rioja 780, Córdoba",
    estado: "Activo",
    responsablePrincipal: "Sergio Farías",
    telefonoResponsable: "351 555 6677",
    responsableSecundario: "Ana Farías",
    aptoFisico: true,
    fechaAptoFisico: "2025-01-30",
    obraSocial: "Swiss Medical",
    numeroAfiliado: "78091234/02",
    observacionesSalud: "Sin observaciones relevantes.",
    crews: ["Elite"],
    categoria: "Cuota 8",
    aptoCompetir: true,
    cuota: "$60.000",
  },
  {
    id: "lucia-gomez",
    nombre: "Lucía",
    apellido: "Gómez",
    dni: "46.334.110",
    fechaNacimiento: "2011-05-19",
    telefono: "351 555 8899",
    email: "lucia.gomez@gmail.com",
    direccion: "Av. Vélez Sarsfield 22, Córdoba",
    estado: "Pendiente",
    responsablePrincipal: "Carla Gómez",
    telefonoResponsable: "351 555 3344",
    responsableSecundario: "",
    aptoFisico: false,
    fechaAptoFisico: "",
    obraSocial: "OSDE",
    numeroAfiliado: "60078901/03",
    observacionesSalud: "Pendiente presentar apto físico.",
    crews: ["Recreativo"],
    categoria: "Cuota 8",
    aptoCompetir: false,
    cuota: "$30.000",
  },
  {
    id: "tomas-ruiz",
    nombre: "Tomás",
    apellido: "Ruiz",
    dni: "45.902.556",
    fechaNacimiento: "2010-09-30",
    telefono: "351 555 6600",
    email: "tomas.ruiz@gmail.com",
    direccion: "Calle Obispo Trejo 155, Córdoba",
    estado: "Activo",
    responsablePrincipal: "Pablo Ruiz",
    telefonoResponsable: "351 555 7788",
    responsableSecundario: "",
    aptoFisico: true,
    fechaAptoFisico: "2025-04-02",
    obraSocial: "Galeno",
    numeroAfiliado: "33056712/01",
    observacionesSalud: "Sin observaciones relevantes.",
    crews: ["Recreativo"],
    categoria: "Cuota 8",
    aptoCompetir: true,
    cuota: "$30.000",
  },
  {
    id: "camila-torres",
    nombre: "Camila",
    apellido: "Torres",
    dni: "44.778.021",
    fechaNacimiento: "2009-02-11",
    telefono: "351 555 1010",
    email: "camila.torres@gmail.com",
    direccion: "Av. General Paz 900, Córdoba",
    estado: "Baja",
    responsablePrincipal: "Roberto Torres",
    telefonoResponsable: "351 555 2020",
    responsableSecundario: "Silvia Torres",
    aptoFisico: false,
    fechaAptoFisico: "2024-08-15",
    obraSocial: "Sancor Salud",
    numeroAfiliado: "44011223/00",
    observacionesSalud: "Baja temporal por lesión.",
    crews: ["Elite"],
    categoria: "Cuota 8",
    aptoCompetir: false,
    cuota: "$60.000",
  },
]

export function getAlumno(id: string): Alumno | undefined {
  return alumnos.find((a) => a.id === id)
}

export const TOTAL_ALUMNOS = 234

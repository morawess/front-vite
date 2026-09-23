
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import type { FormEvent } from "react"
import { ChevronLeft } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormSection } from "@/components/students/form-section"
import type { Alumno } from "@/lib/students-data"

const crews = ["Recreativo", "Competencia", "Elite"]
const obrasSociales = ["OSDE", "Apross", "Swiss Medical", "Galeno", "Sancor Salud", "Particular"]

function Field({
  id,
  label,
  children,
  className,
}: {
  id: string
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1.5 text-xs font-medium text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  )
}

export function AlumnoForm({ alumno }: { alumno?: Alumno }) {
  const navigate = useNavigate()
  const isEdit = Boolean(alumno)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    navigate(alumno ? `/students/${alumno.id}` : "/students")
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-4xl flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            render={
              <Link
                to={alumno ? `/students/${alumno.id}` : "/students"}
                aria-label="Volver"
              />
            }
            variant="ghost"
            size="icon"
            className="shrink-0"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </Button>
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {isEdit ? `Editar perfil · ${alumno?.nombre} ${alumno?.apellido}` : "Añadir alumno"}
            </h2>
            <p className="text-xs text-muted-foreground">
              {isEdit
                ? "Actualizá los datos del alumno."
                : "Completá los datos para registrar un nuevo alumno."}
            </p>
          </div>
        </div>
        {isEdit && (
          <Button type="button" variant="ghost" className="text-destructive hover:text-destructive">
            Dar de baja
          </Button>
        )}
      </div>

      <Card className="p-6">
        <FormSection title="Datos personales" description="Información básica del alumno.">
          <Field id="nombre" label="Nombre">
            <Input id="nombre" defaultValue={alumno?.nombre} placeholder="Nombre" />
          </Field>
          <Field id="apellido" label="Apellido">
            <Input id="apellido" defaultValue={alumno?.apellido} placeholder="Apellido" />
          </Field>
          <Field id="dni" label="DNI">
            <Input id="dni" defaultValue={alumno?.dni} placeholder="00.000.000" />
          </Field>
          <Field id="fechaNacimiento" label="Fecha de nacimiento">
            <Input id="fechaNacimiento" type="date" defaultValue={alumno?.fechaNacimiento} />
          </Field>
          <Field id="telefono" label="Teléfono">
            <Input id="telefono" defaultValue={alumno?.telefono} placeholder="351 555 0000" />
          </Field>
          <Field id="email" label="Email">
            <Input id="email" type="email" defaultValue={alumno?.email} placeholder="nombre@correo.com" />
          </Field>
          <Field id="direccion" label="Dirección" className="sm:col-span-2">
            <Input id="direccion" defaultValue={alumno?.direccion} placeholder="Calle, número, ciudad" />
          </Field>
        </FormSection>

        <FormSection title="Responsables" description="Contacto de padres o tutores.">
          <Field id="responsablePrincipal" label="Responsable principal">
            <Input id="responsablePrincipal" defaultValue={alumno?.responsablePrincipal} placeholder="Nombre y apellido" />
          </Field>
          <Field id="telefonoResponsable" label="Teléfono del responsable">
            <Input id="telefonoResponsable" defaultValue={alumno?.telefonoResponsable} placeholder="351 555 0000" />
          </Field>
          <Field id="responsableSecundario" label="Responsable secundario" className="sm:col-span-2">
            <Input id="responsableSecundario" defaultValue={alumno?.responsableSecundario} placeholder="Opcional" />
          </Field>
        </FormSection>

        <FormSection title="Salud" description="Datos médicos y cobertura.">
          <Field id="obraSocial" label="Obra social">
            <Select defaultValue={alumno?.obraSocial}>
              <SelectTrigger id="obraSocial" className="w-full">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                {obrasSociales.map((o) => (
                  <SelectItem key={o} value={o}>
                    {o}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field id="numeroAfiliado" label="N° de afiliado">
            <Input id="numeroAfiliado" defaultValue={alumno?.numeroAfiliado} placeholder="00000000/00" />
          </Field>
          <Field id="fechaAptoFisico" label="Fecha apto físico">
            <Input id="fechaAptoFisico" type="date" defaultValue={alumno?.fechaAptoFisico} />
          </Field>
          <div className="flex items-end">
            <label
              htmlFor="aptoFisico"
              className="flex h-10 w-full items-center justify-between gap-3 rounded-md border border-input px-3"
            >
              <span className="text-sm text-foreground">Apto físico presentado</span>
              <Switch id="aptoFisico" defaultChecked={alumno?.aptoFisico} />
            </label>
          </div>
          <Field id="observacionesSalud" label="Observaciones" className="sm:col-span-2">
            <Input id="observacionesSalud" defaultValue={alumno?.observacionesSalud} placeholder="Alergias, lesiones, etc." />
          </Field>
        </FormSection>

        <FormSection title="Competencias" description="Crew y estado competitivo.">
          <Field id="crews" label="Crews" className="sm:col-span-2">
            <div className="flex flex-wrap gap-4 mt-2">
              {crews.map((c) => (
                <label key={c} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="crews"
                    value={c}
                    defaultChecked={alumno?.crews?.includes(c)}
                    className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">{c}</span>
                </label>
              ))}
            </div>
          </Field>
          <Field id="categoria" label="Categoría / cuota">
            <Input id="categoria" defaultValue={alumno?.categoria} placeholder="Cuota 8" />
          </Field>
          <div className="flex items-end sm:col-span-2">
            <label
              htmlFor="aptoCompetir"
              className="flex h-10 w-full items-center justify-between gap-3 rounded-md border border-input px-3"
            >
              <span className="text-sm text-foreground">Apto para competir</span>
              <Switch id="aptoCompetir" defaultChecked={alumno?.aptoCompetir} />
            </label>
          </div>
        </FormSection>

        <div className="flex justify-end gap-3 pt-6">
          <Button
            render={<Link to={alumno ? `/students/${alumno.id}` : "/students"} />}
            type="button"
            variant="outline"
          >
            Cancelar
          </Button>
          <Button type="submit">{isEdit ? "Guardar cambios" : "Registrar alumno"}</Button>
        </div>
      </Card>
    </form>
  )
}

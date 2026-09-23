
import { useMemo, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { alumnos } from "@/lib/students-data"
import {
  formatMoney,
  montoConDescuento,
  montoPorCrew,
  type Crew,
  type MetodoPago,
} from "@/lib/payments-data"

const metodos: MetodoPago[] = ["Efectivo", "Transferencia", "Débito", "Crédito"]

export function RegistrarPago({ onDone }: { onDone?: () => void }) {
  const [alumnoId, setAlumnoId] = useState("")
  const [metodo, setMetodo] = useState<MetodoPago | "">("")
  const [descuento, setDescuento] = useState("0")

  const alumno = alumnos.find((a) => a.id === alumnoId)
  const crews = (alumno?.crews as Crew[]) ?? []
  const base = crews.reduce((acc, c) => acc + (montoPorCrew[c] || 0), 0)
  const desc = Number(descuento) || 0
  const total = useMemo(() => montoConDescuento(base, desc), [base, desc])

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        onDone?.()
      }}
    >
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="alumno">Seleccioná un estudiante (nombre o DNI)</Label>
        <Select value={alumnoId} onValueChange={(val) => setAlumnoId(val ?? "")}>
          <SelectTrigger id="alumno">
            <SelectValue placeholder="Buscar estudiante..." />
          </SelectTrigger>
          <SelectContent>
            {alumnos.map((a) => (
              <SelectItem key={a.id} value={a.id}>
                {a.nombre} {a.apellido} — {a.dni}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="metodo">Método de pago</Label>
        <Select value={metodo} onValueChange={(v) => setMetodo(v as MetodoPago)}>
          <SelectTrigger id="metodo">
            <SelectValue placeholder="Seleccioná un método" />
          </SelectTrigger>
          <SelectContent>
            {metodos.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="descuento">Descuento (%)</Label>
        <Input
          id="descuento"
          type="number"
          min={0}
          max={100}
          value={descuento}
          onChange={(e) => setDescuento(e.target.value)}
        />
      </div>

      <div className="rounded-xl border border-border bg-muted/40 p-4 text-sm">
        <div className="flex items-center justify-between py-1">
          <span className="text-muted-foreground">Crews</span>
          <span className="font-medium text-foreground">{alumno ? crews.join(", ") : "—"}</span>
        </div>
        <div className="flex items-center justify-between py-1">
          <span className="text-muted-foreground">Cuota base</span>
          <span className="font-medium text-foreground">{formatMoney(base)}</span>
        </div>
        <div className="flex items-center justify-between py-1">
          <span className="text-muted-foreground">Descuento</span>
          <span className="font-medium text-foreground">{desc}%</span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
          <span className="font-medium text-foreground">Total</span>
          <span className="text-lg font-semibold text-primary">{formatMoney(total)}</span>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={!alumnoId || !metodo}>
        Registrar pago
      </Button>
    </form>
  )
}

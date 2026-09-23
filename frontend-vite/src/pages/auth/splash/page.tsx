
import { Loader2 } from "lucide-react"

export default function SplashPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-6">
        <img src="/logo.svg" alt="Andromeda Studio" width={100} height={100} className="object-contain" />
      </div>
      <h1 className="mb-8 text-[11px] font-bold tracking-[0.2em] text-white">ANDROMEDA STUDIO</h1>
      <Loader2 className="h-5 w-5 animate-spin text-white/50" />
    </div>
  )
}

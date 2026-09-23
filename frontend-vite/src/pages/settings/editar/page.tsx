

import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Settings, User, ChevronLeft } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export default function EditarPerfilPage() {
  return (
    <AppShell title="Configuraciones">
      <div className="flex-1 w-full p-8 bg-gray-50/50">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <Link to="/settings">
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold text-gray-800">Configuraciones</h1>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
          <Settings className="w-6 h-6" />
        </Button>
      </div>

      {/* Main Content Card */}
      <div className="max-w-3xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[500px]">
        
        {/* Profile Header (Nombre y Avatar) */}
        <div className="flex items-end gap-6 mb-12">
          <Avatar className="w-16 h-16 bg-purple-50 border-2 border-purple-100 flex items-center justify-center">
            <User className="w-8 h-8 text-purple-500" />
            <AvatarFallback className="hidden">JF</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 border-b border-gray-200 pb-2 max-w-sm">
            <h2 className="text-xl font-medium text-gray-900">Jere Farias</h2>
          </div>
        </div>

        {/* Formulario */}
        <div className="max-w-sm space-y-10">
          {/* Campo Correo */}
          <div className="space-y-1">
            <Label htmlFor="correo" className="text-sm font-normal text-gray-500">
              Correo
            </Label>
            <Input 
              id="correo" 
              type="email" 
              defaultValue="jerefarias@gmail.com" 
              placeholder="Ingresá tu correo"
              // Clases personalizadas para imitar el underline de Figma anulando el borde completo por defecto
              className="border-0 border-b border-gray-300 rounded-none px-0 h-8 shadow-none focus-visible:ring-0 focus-visible:border-purple-600 text-gray-900 bg-transparent text-base"
            />
          </div>

          {/* Campo Contraseña */}
          <div className="space-y-1">
            <Label htmlFor="contrasena" className="text-sm font-normal text-gray-500">
              Contraseña
            </Label>
            <Input 
              id="contrasena" 
              type="password" 
              defaultValue="12345678"
              placeholder="Ingresá tu contraseña"
              className="border-0 border-b border-gray-300 rounded-none px-0 h-8 shadow-none focus-visible:ring-0 focus-visible:border-purple-600 text-gray-900 bg-transparent text-base"
            />
          </div>
        </div>

        {/* Nota: En tu Figma no se ve el botón de guardar por el corte de la imagen, 
            pero podrías agregarlo acá abajo cuando la vista sea funcional */}
        <div className="mt-12 max-w-sm flex justify-end">
          <Button className="bg-purple-900 hover:bg-purple-800 text-white rounded-full px-8">
            Guardar cambios
          </Button>
        </div>
        </div>

      </div>
    </AppShell>
  );
}
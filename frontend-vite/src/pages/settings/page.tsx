
import { useState } from "react";
import { Link } from 'react-router-dom';
import { AppShell } from "@/components/app-shell";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, Book, User, Users, FileText, LogOut } from "lucide-react";

export default function ConfiguracionesPage() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const menuItems = [
    { icon: Book, label: "Manual de uso", href: "/manual" },
    { icon: User, label: "Editar perfil", href: "/settings/editar" },
    { icon: Users, label: "Usuarios y permisos", href: "/settings/roles" },
    { icon: FileText, label: "Auditoría", href: "/settings/auditoria" },
  ];

  return (
    <AppShell title="Configuraciones">
      <div className="flex-1 w-full bg-background min-h-full">
        {/* Main Content Card */}
      <div className="max-w-3xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        
        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-10">
          <Avatar className="w-16 h-16 border-2 border-purple-100">
            <AvatarImage src="/placeholder-user.jpg" alt="Jere Farias" />
            <AvatarFallback className="bg-purple-100 text-purple-700 text-xl font-semibold">
              JF
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Jere Farias</h2>
            <p className="text-gray-500 text-sm">jerefarias@gmail.com</p>
          </div>
        </div>

        {/* Navigation List */}
        <div className="flex flex-col space-y-2">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.href}>
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-purple-700 cursor-pointer">
                <item.icon className="w-5 h-5 text-gray-400" />
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          ))}
          
          {/* Botón de Cerrar Sesión */}
          <div 
            onClick={() => setIsLogoutModalOpen(true)}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-red-50 transition-colors text-gray-700 hover:text-red-600 cursor-pointer mt-4"
          >
            <LogOut className="w-5 h-5 text-gray-400" />
            <span className="font-medium">Cerrar Sesión</span>
          </div>
        </div>
      </div>

      {/* Modal de Cerrar Sesión */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center animate-in fade-in zoom-in duration-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              ¿Desea cerrar sesión?
            </h3>
            <div className="flex justify-center gap-4">
              <Button 
                variant="destructive" 
                className="bg-red-500 hover:bg-red-600 px-8 rounded-full"
                onClick={() => {
                  // Lógica de logout
                  setIsLogoutModalOpen(false);
                }}
              >
                Cerrar Sesión
              </Button>
              <Button 
                variant="outline" 
                className="px-8 rounded-full text-gray-600"
                onClick={() => setIsLogoutModalOpen(false)}
              >
                Volver
              </Button>
            </div>
          </div>
        </div>
      )}
      </div>
    </AppShell>
  );
}
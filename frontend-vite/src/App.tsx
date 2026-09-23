import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './pages/layout'
import AuthLayout from './pages/auth/layout'
import ProtectedRoute from './components/ProtectedRoute'

// Import pages
import Dashboard from './pages/page'
import Alerts from './pages/alerts/page'
import Login from './pages/auth/login/page'
import ForgotPassword from './pages/auth/forgot-password/page'
import Splash from './pages/auth/splash/page'
import CashBox from './pages/cash_box/page'
import Crews from './pages/crews/page'
import CrewDetails from './pages/crews/[id]/page'
import Enrollments from './pages/enrollments/page'
import Payments from './pages/payments/page'
import PaymentDetails from './pages/payments/[id]/page'
import Settings from './pages/settings/page'
import SettingsAuditoria from './pages/settings/auditoria/page'
import SettingsEditar from './pages/settings/editar/page'
import SettingsRoles from './pages/settings/roles/page'
import Students from './pages/students/page'
import StudentNew from './pages/students/nuevo/page'
import StudentDetails from './pages/students/[id]/page'
import StudentEdit from './pages/students/[id]/editar/page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas (Auth) */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="splash" element={<Splash />} />
          <Route index element={<Navigate to="/auth/login" replace />} />
        </Route>

        {/* Rutas protegidas */}
        <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="cash_box" element={<CashBox />} />
          
          <Route path="crews">
            <Route index element={<Crews />} />
            <Route path=":id" element={<CrewDetails />} />
          </Route>

          <Route path="enrollments" element={<Enrollments />} />

          <Route path="payments">
            <Route index element={<Payments />} />
            <Route path=":id" element={<PaymentDetails />} />
          </Route>

          <Route path="settings">
            <Route index element={<Settings />} />
            <Route path="auditoria" element={<SettingsAuditoria />} />
            <Route path="editar" element={<SettingsEditar />} />
            <Route path="roles" element={<SettingsRoles />} />
          </Route>

          <Route path="students">
            <Route index element={<Students />} />
            <Route path="nuevo" element={<StudentNew />} />
            <Route path=":id" element={<StudentDetails />} />
            <Route path=":id/editar" element={<StudentEdit />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import AuthLayout from './pages/auth/AuthLayout'
import ProtectedRoute from './components/ProtectedRoute'

// Import pages
import Dashboard from './pages/DashboardPage'
import Alerts from './pages/alerts/AlertsPage'
import Login from './pages/auth/LoginPage'
import ForgotPassword from './pages/auth/ForgotPasswordPage'
import Splash from './pages/auth/SplashPage'
import CashBox from './pages/cash_box/CashBoxPage'
import Crews from './pages/crews/CrewsPage'
import CrewDetails from './pages/crews/CrewDetailsPage'
import Enrollments from './pages/enrollments/EnrollmentsPage'
import Payments from './pages/payments/PaymentsPage'
import PaymentDetails from './pages/payments/PaymentDetailsPage'
import Settings from './pages/settings/SettingsPage'
import SettingsAuditoria from './pages/settings/SettingsAuditPage'
import SettingsEditar from './pages/settings/SettingsEditPage'
import SettingsRoles from './pages/settings/SettingsRolesPage'
import Students from './pages/students/StudentsPage'
import StudentNew from './pages/students/StudentNewPage'
import StudentDetails from './pages/students/StudentDetailsPage'
import StudentEdit from './pages/students/StudentEditPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas (Auth) */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Navigate to="/" replace />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="splash" element={<Splash />} />
          <Route index element={<Navigate to="/" replace />} />
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

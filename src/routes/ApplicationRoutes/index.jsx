import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../../pages/DashboardPage"
import { LoginPage } from "../../pages/LoginPage"
import { RegisterPage } from "../../pages/RegisterPage"

export function ApplicationRoutes({ user, setUser }) {
  return (
    <Routes>
      <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={<DashboardPage user={user} setUser={setUser} />}
      />
    </Routes>
  )
}

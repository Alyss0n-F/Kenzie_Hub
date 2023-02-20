import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../../pages/DashboardPage"
import { LoginPage } from "../../pages/LoginPage"
import { RegisterPage } from "../../pages/RegisterPage"
import { RouteProtection } from "../../pages/RouteProtection"

export function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<RouteProtection />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

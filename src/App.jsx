import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { DashboardPage } from "./pages/DashboardPage"

function App() {
  const [user, setUser] = useState("")

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={<DashboardPage user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  )
}

export default App

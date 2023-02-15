import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { StyledDashboard } from "./style"

export function DashboardPage({ user, setUser }) {
  const navigate = useNavigate()

  function logout() {
    window.localStorage.clear()
    setUser("")
    navigate("/")
    toast.info(`${user.name} saiu`)
  }
  return (
    <StyledDashboard>
      <nav>
        <h1>Kenzie Hub</h1>
        <button onClick={logout}>Sair</button>
      </nav>
      <header>
        <h2>Olá, {user.name}</h2>
        <small>{user.course_module}</small>
      </header>
      <main>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </StyledDashboard>
  )
}

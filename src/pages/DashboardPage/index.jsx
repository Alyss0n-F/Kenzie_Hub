import { useContext } from "react"
import { AddModal } from "../../components/AddModal"
import { CardTech } from "../../components/CardTech"
import { TechContext } from "../../providers/TechContext"
import { UserContext } from "../../providers/UserContext"
import { StyledDashboard } from "./style"

export function DashboardPage() {
  const { user, logout } = useContext(UserContext)
  const { modal, setModal } = useContext(TechContext)

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
        <div>
          <h3>Tecnologias</h3>
          <button onClick={() => setModal(!modal)}>+</button>
          {modal && <AddModal />}
        </div>
        <ul>
          {user &&
            user.techs.map((tech) => <CardTech key={tech.id} tech={tech} />)}
        </ul>
      </main>
    </StyledDashboard>
  )
}

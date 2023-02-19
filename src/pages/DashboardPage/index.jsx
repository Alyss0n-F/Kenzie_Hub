import { useContext } from "react"
import { AddModal } from "../../components/AddModal"
import { CardTech } from "../../components/CardTech"
import { UpdateModal } from "../../components/UpdateModal"
import { TechContext } from "../../providers/TechContext"
import { UserContext } from "../../providers/UserContext"
import { StyledDashboard } from "./style"

export function DashboardPage() {
  const { user, logout, techList } = useContext(UserContext)
  const { addModal, setAddModal, updateModal, setUpdateModal } =
    useContext(TechContext)

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
          <button onClick={() => setAddModal(!addModal)}>+</button>
          {addModal && <AddModal />}
        </div>
        <ul>
          {user &&
            techList.map((tech) => <CardTech key={tech.id} tech={tech} />)}
        </ul>
      </main>
      {updateModal && <UpdateModal />}
    </StyledDashboard>
  )
}

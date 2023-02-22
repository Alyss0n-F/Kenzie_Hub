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
        <div className="title_container">
          <h3>Tecnologias</h3>
          <button onClick={() => setAddModal(!addModal)}>+</button>
        </div>
        <ul>
          {techList.length > 0 ? (
            techList.map((tech) => <CardTech key={tech.id} tech={tech} />)
          ) : (
            <h4>Sem tecnologias adicionadas</h4>
          )}
        </ul>
      </main>
      {addModal && <AddModal />}
      {updateModal && <UpdateModal />}
    </StyledDashboard>
  )
}

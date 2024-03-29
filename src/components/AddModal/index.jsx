import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { TechContext } from "../../providers/TechContext"
import { UserContext } from "../../providers/UserContext"
import { StyledAddModal } from "./style"

export function AddModal() {
  const { addModal, setAddModal, createTech } = useContext(TechContext)
  const { loading, setLoading } = useContext(UserContext)

  const schema = yup.object({
    title: yup.string().required("O campo nome é obrigatório"),
    status: yup.string().required("O campo status é obrigatório"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function onSubmit(data) {
    createTech(data)
    setLoading(true)
  }

  return (
    <StyledAddModal>
      <div className="modal_content">
        <div className="title_container">
          <h5>Cadastrar Tecnologia</h5>
          <button onClick={() => setAddModal(!addModal)}>X</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Nome</label>
          <input
            type="text"
            id="title"
            placeholder="Digite o nome"
            {...register("title")}
          />
          <p>{errors.title?.message}</p>

          <label htmlFor="status">Selecionar status</label>
          <select id="status" {...register("status")}>
            <option value="">Selecione o status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <p>{errors.status?.message}</p>

          <button type="submit">
            {loading === true ? (
              <span>
                <div className="loading_ring"></div>
                {loading}
              </span>
            ) : (
              "Entrar"
            )}
          </button>
        </form>
      </div>
    </StyledAddModal>
  )
}

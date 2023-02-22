import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { StyledUpdateModal } from "./style"

export function UpdateModal() {
  const {
    updateModal,
    setUpdateModal,
    updateTech,
    updateInput,
    updateID,
    deleteTech,
    updateSelect,
  } = useContext(TechContext)

  const schema = yup.object({
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
    updateTech(data)
  }

  return (
    <StyledUpdateModal>
      <div className="modal_content">
        <div className="title_container">
          <h5>Editar Tecnologia</h5>
          <button onClick={() => setUpdateModal(!updateModal)}>X</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Nome do projeto</label>
          <input type="text" id="title" value={updateInput} disabled />
          <p>{errors.title?.message}</p>

          <label htmlFor="status">Selecionar status</label>
          <select
            id="status"
            {...register("status")}
            defaultValue={updateSelect}
          >
            <option value="">Selecione o status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <p>{errors.status?.message}</p>

          <div className="button_container">
            <button type="submit">Salvar alterações</button>
            <button
              className="delete_button"
              onClick={() => deleteTech(updateID)}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyledUpdateModal>
  )
}

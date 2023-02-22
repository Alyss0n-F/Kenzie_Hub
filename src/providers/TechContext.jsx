import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify"
import { api } from "../services/api"
import { UserContext } from "./UserContext"

export const TechContext = createContext({})

export function TechProvider({ children }) {
  const [addModal, setAddModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)
  const [updateID, setUpdateID] = useState("")
  const [updateInput, setUpdateInput] = useState("")
  const [updateSelect, setUpdateSelect] = useState("")
  const { techList, setTechList, setLoading } = useContext(UserContext)

  async function createTech(data) {
    const token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setTechList([...techList, response.data])
      setAddModal(false)
      setLoading(false)
      toast.success("Tecnologia cadastrada!")
    } catch (error) {
      if (
        error.response.data.message ===
        "User Already have this technology created you can only update it"
      ) {
        toast.error("Esta tecnologia já foi cadastrada!")
        setLoading(false)
      }
    }
  }

  async function deleteTech(techID) {
    const token = localStorage.getItem("@TOKEN")
    try {
      await api.delete(`/users/techs/${techID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const filtered = techList.filter((tech) => tech.id !== techID)
      setTechList(filtered)
      setUpdateModal(false)
      setLoading(false)
      toast.info("Tecnologia excluida")
    } catch (error) {
      console.log(error.data)
    }
  }

  async function updateTech(data) {
    const token = localStorage.getItem("@TOKEN")
    try {
      await api.put(`/users/techs/${updateID}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const updatedTech = techList.map((tech) => {
        if (tech.id === updateID) {
          return { ...tech, ...data }
        } else {
          return tech
        }
      })
      setTechList(updatedTech)
      setUpdateModal(false)
      setLoading(false)
      toast.success("Tecnologia atualizada")
    } catch (error) {
      console.log(error.response.data)
    }
  }

  function getUpdateID(techID, techInput, techSelect) {
    setUpdateModal(!updateModal)
    setUpdateID(techID)
    setUpdateInput(techInput)
    setUpdateSelect(techSelect)
  }

  return (
    <TechContext.Provider
      value={{
        addModal,
        setAddModal,
        createTech,
        deleteTech,
        updateModal,
        setUpdateModal,
        updateTech,
        getUpdateID,
        updateInput,
        updateID,
        updateSelect,
      }}
    >
      {children}
    </TechContext.Provider>
  )
}

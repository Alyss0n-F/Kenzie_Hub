import { createContext, useState } from "react"
import { api } from "../services/api"

export const TechContext = createContext({})

export function TechProvider({ children }) {
  const [modal, setModal] = useState(false)

  async function createTech(data) {
    const token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  function deleteTech() {}

  return (
    <TechContext.Provider value={{ modal, setModal, createTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  )
}

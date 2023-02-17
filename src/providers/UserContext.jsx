import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api"

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [user, setUser] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    if (token) {
      async function autoLogin() {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          setUser(response.data)
        } catch (error) {
          localStorage.removeItem("@TOKEN")
        }
      }
      autoLogin()
    }
  }, [])

  async function handleLogin(data) {
    try {
      const response = await api.post("/sessions", data)
      setUser(response.data.user)

      localStorage.setItem("@TOKEN", response.data.token)
      localStorage.setItem("@USERID", response.data.user.id)

      toast.success("Usuário logado com sucesso")
      navigate("/dashboard")
    } catch (error) {
      if (
        error.response.data.message === "Incorrect email / password combination"
      ) {
        toast.error("Email ou senha incorretos")
        setLoading(false)
      } else {
        toast.error(error.response.data.message)
        setLoading(false)
      }
    }
  }

  async function handleRegister(data) {
    try {
      await api.post("/users", data)
      toast.success("Conta criada com sucesso!")
      navigate("/")
    } catch (error) {
      if (error.response.data.message === "Email already exists") {
        toast.error("Já existe uma conta associada a este email")
      } else {
        toast.error(error.response.data.message)
      }
    }
  }

  function logout() {
    window.localStorage.clear()
    setUser("")
    setLoading(false)
    navigate("/")
    toast.info(`${user.name} saiu`)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        handleRegister,
        loading,
        setLoading,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

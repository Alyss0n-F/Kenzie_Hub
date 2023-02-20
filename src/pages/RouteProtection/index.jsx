import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"

export function RouteProtection() {
  const { user } = useContext(UserContext)
  const token = localStorage.getItem("@TOKEN")

  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/")
    }
  }, [])
  return <>{user ? <Outlet /> : null}</>
}

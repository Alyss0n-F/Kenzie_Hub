import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"

export function RouteProtection() {
  // const { user } = useContext(UserContext)
  // const navigate = useNavigate()
  // console.log(user)
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/")
  //   }
  // }, [])
  // return <>{user ? <Outlet /> : null}</>
}

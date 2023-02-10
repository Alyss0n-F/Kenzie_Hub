import { useNavigate } from "react-router-dom"

export function DashboardPage({ user, setUser }) {
  const navigate = useNavigate()

  function logout() {
    window.localStorage.clear()
    setUser("")
    navigate("/")
    alert(`${user.name} saiu`)
  }
  return (
    <>
      <h1>DASHBOARD PAGE</h1>
      <p>{user.name}</p>
      <p>{user.course_module}</p>
      <button onClick={logout}>Sair</button>
    </>
  )
}

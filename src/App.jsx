import { useState } from "react"
import { ApplicationRoutes } from "./routes/ApplicationRoutes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [user, setUser] = useState("")

  return (
    <div>
      <ToastContainer />
      <ApplicationRoutes user={user} setUser={setUser} />
    </div>
  )
}

export default App

import { ApplicationRoutes } from "./routes/ApplicationRoutes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div>
      <ToastContainer />
      <ApplicationRoutes />
    </div>
  )
}

export default App

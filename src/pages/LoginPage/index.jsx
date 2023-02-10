import { useState } from "react"
import { FormLogin } from "../../components/FormLogin"
import { StyledMain } from "./style"

export function LoginPage({ user, setUser }) {
  const [loading, setLoading] = useState(true)

  return (
    <StyledMain>
      <h1>Kenzie hub</h1>
      <div>
        <FormLogin user={user} setUser={setUser} />
      </div>
    </StyledMain>
  )
}

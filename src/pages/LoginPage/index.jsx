import { useState } from "react"
import { FormLogin } from "../../components/FormLogin"
import { StyledMain } from "./style"

export function LoginPage({ user, setUser }) {
  const [loading, setLoading] = useState(false)

  return (
    <StyledMain>
      <h1>Kenzie Hub</h1>
      <div>
        <FormLogin
          user={user}
          setUser={setUser}
          setLoading={setLoading}
          loading={loading}
        />
      </div>
    </StyledMain>
  )
}

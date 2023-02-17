import { FormLogin } from "../../components/FormLogin"
import { StyledMain } from "./style"

export function LoginPage() {
  return (
    <StyledMain>
      <h1>Kenzie Hub</h1>
      <div>
        <FormLogin />
      </div>
    </StyledMain>
  )
}

import { Link } from "react-router-dom"
import { FormRegister } from "../../components/FormRegister"
import { StyledRegisterPage } from "./style"

export function RegisterPage() {
  return (
    <StyledRegisterPage>
      <header>
        <h1>Kenzie Hub</h1>
        <Link to={"/"}>Voltar</Link>
      </header>
      <FormRegister />
    </StyledRegisterPage>
  )
}

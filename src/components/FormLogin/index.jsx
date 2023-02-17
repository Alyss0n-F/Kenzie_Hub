import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { StyledFormLogin } from "./style"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

const schema = yup.object({
  email: yup.string().required("O campo email é obrigatório"),
  password: yup.string().required("O campo senha é obrigatório"),
})

export function FormLogin() {
  const { setUser, handleLogin, loading, setLoading } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function onSubmit(data) {
    setUser(data)
    handleLogin(data)
    setLoading(true)
  }

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <p>{errors.email?.message}</p>

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <p>{errors.password?.message}</p>

      <button type="submit">
        {loading === true ? (
          <span>
            <div className="loading_ring"></div>
            {loading}
          </span>
        ) : (
          "Entrar"
        )}
      </button>
      <small>Ainda não possui uma conta?</small>
      <Link to={"/register"}>Cadastre-se</Link>
    </StyledFormLogin>
  )
}

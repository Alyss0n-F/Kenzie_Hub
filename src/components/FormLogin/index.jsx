import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"
import { StyledFormLogin } from "./style"
import { toast } from "react-toastify"

const schema = yup.object({
  email: yup.string().required("O campo email é obrigatório"),
  password: yup.string().required("O campo senha é obrigatório"),
})

export function FormLogin({ setUser, setLoading, loading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  async function handleLogin(data) {
    try {
      const response = await api.post("/sessions", data)
      setUser(response.data.user)

      localStorage.setItem("@TOKEN", response.data.token)
      localStorage.setItem("@USERID", response.data.user.id)

      toast.success("Usuário logado com sucesso")
      navigate("/dashboard")
    } catch (error) {
      if (
        error.response.data.message === "Incorrect email / password combination"
      ) {
        toast.error("Email ou senha incorretos")
      } else {
        toast.error(error.response.data.message)
      }
    }
  }

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

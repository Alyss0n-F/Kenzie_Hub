import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { StyledFormRegister } from "./style"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

const schema = yup.object({
  name: yup.string().required("O campo nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O campo email é obrigatório"),
  password: yup
    .string()
    .required("O campo senha é obrigatório")
    .matches(/[a-zA-Z]+/, "A senha deve conter ao menos uma letra")
    .matches(/(\d)/, "A senha deve conter ao menos um número")
    .matches(/(\W)/, "A senha deve conter ao menos um símbolo")
    .matches(/(.{8,})/, "A senha deve conter no mínimo 8 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem")
    .required("Confirme sua senha"),
  bio: yup.string().required("O campo bio é obrigatório"),
  contact: yup.string().required("O campo contato é obrigatório"),
  course_module: yup.string().required("O campo módulo é obrigatório"),
})

export function FormRegister() {
  const { handleRegister } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function onSubmit(data) {
    handleRegister(data)
  }

  return (
    <StyledFormRegister onSubmit={handleSubmit(onSubmit)}>
      <h3>Crie sua conta</h3>
      <p>Rápido e grátis, vamos nessa</p>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      <p>{errors.name?.message}</p>

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

      <label htmlFor="password_confirmation">Confirmar senha</label>
      <input
        type="password"
        id="password_confirmation"
        placeholder="Confirme sua senha"
        {...register("password_confirmation")}
      />
      <p>{errors.password_confirmation?.message}</p>

      <label htmlFor="bio">Bio</label>
      <input
        type="text"
        id="bio"
        placeholder="Fale sobre você"
        {...register("bio")}
      />
      <p>{errors.bio?.message}</p>

      <label htmlFor="contact">Contato</label>
      <input
        type="text"
        id="contact"
        placeholder="Opções de contato"
        {...register("contact")}
      />
      <p>{errors.contact?.message}</p>

      <label htmlFor="course_module">Selecionar módulo</label>
      <select id="course_module" {...register("course_module")}>
        <option value="">Selecione o módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo Módulo (Frontend avançado)">
          Segundo Módulo (Frontend avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      <p>{errors.course_module?.message}</p>

      <button type="submit">Cadastrar</button>
    </StyledFormRegister>
  )
}

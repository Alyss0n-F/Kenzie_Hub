import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { StyledCardTech } from "./style"

export function CardTech({ tech }) {
  const { getUpdateID } = useContext(TechContext)

  return (
    <StyledCardTech
      onClick={() => getUpdateID(tech.id, tech.title, tech.status)}
    >
      <h4>{tech.title}</h4>
      <p>{tech.status}</p>
    </StyledCardTech>
  )
}

import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"

export function CardTech({ tech }) {
  const { getUpdateID } = useContext(TechContext)

  return (
    <li onClick={() => getUpdateID(tech.id, tech.title, tech.status)}>
      <h4>{tech.title}</h4>
      <p>{tech.status}</p>
    </li>
  )
}

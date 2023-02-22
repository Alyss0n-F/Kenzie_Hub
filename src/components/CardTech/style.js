import styled from "styled-components"

export const StyledCardTech = styled.li`
  background-color: var(--grey-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 4px;

  transition: 0.2s;
  cursor: pointer;

  height: 20px;

  :hover {
    background-color: var(--grey-2);
  }

  p {
    color: var(--grey-1);
    font-size: 12px;
  }
`

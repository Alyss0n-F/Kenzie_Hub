import styled from "styled-components"

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  color: var(--color-primary);

  h1 {
    margin-bottom: 15px;
    font-size: 18px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--grey-3);
    color: white;

    border-radius: 3px;

    gap: 30px;
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 25px;
      margin-bottom: 30px;
    }
  }
`

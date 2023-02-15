import styled from "styled-components"

export const StyledRegisterPage = styled.div`
  height: 100vh;
  padding: 15px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 370px;
    margin: 0 auto;
    padding: 30px 0px;

    h1 {
      color: var(--color-primary);
      font-size: 20px;
    }

    a {
      background-color: var(--grey-3);
      text-decoration: none;
      padding: 11px 30px;
      border-radius: 4px;
      color: white;
      font-size: 11px;
      cursor: pointer;
      transition: 0.2s linear;
    }

    a:hover {
      background-color: var(--grey-2);
    }
  }
`

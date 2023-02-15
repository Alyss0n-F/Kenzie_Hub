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

    border-radius: 5px;

    gap: 30px;
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 25px;
      margin-bottom: 30px;
    }
  }

  .loading_ring {
    border: 6px solid white;
    border-top: 6px solid var(--color-primary);
    margin: 0 auto;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px black;
    animation: animate 1s ease-in-out infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`

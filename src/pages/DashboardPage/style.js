import styled from "styled-components"

export const StyledDashboard = styled.div`
  background-color: var(--grey-4);
  height: 100vh;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid var(--grey-3);

    h1 {
      color: var(--color-primary);
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }

    button {
      padding: 10px 20px;
      background-color: var(--grey-3);
      color: white;
      border-radius: 4px;
      border: none;
      font-weight: 500;
      cursor: pointer;
      transition: 0.2s linear;
    }

    button:hover {
      background-color: var(--grey-2);
    }
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid var(--grey-3);
    padding: 15px;

    small {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: var(--grey-1);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 15px;
    gap: 20px;

    .title_container {
      display: flex;
      justify-content: space-between;

      button {
        padding: 2px 8px;
        font-size: 20px;
        border-radius: 4px;
        border: none;
        background-color: var(--grey-3);
        color: white;
        cursor: pointer;
        transition: 0.2s;
      }

      button:hover {
        background-color: var(--grey-2);
      }
    }

    ul {
      background-color: var(--grey-3);
      list-style: none;
      padding: 22px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 4px;
    }
  }

  @media (min-width: 1200px) {
    nav {
      padding: 15px 250px;
    }

    header {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 15px 250px;
    }

    main {
      margin-top: 30px;
      justify-content: center;
      padding: 15px 250px;
      gap: 40px;
    }
  }
`

import styled from "styled-components"

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 15px;
  padding: 30px 20px;

  width: 290px;

  input {
    width: 100%;
    height: 30px;
    border-radius: 3px;
    border: 1px solid white;
    background-color: var(--grey-2);
    outline: none;
    padding: 15px 10px;
    color: white;
  }

  input::placeholder {
    color: var(--grey-1);
  }

  label {
    align-self: flex-start;
    font-size: 10px;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: var(--color-primary);
    color: white;
    padding: 0px 15px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-1);
    color: white;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 0px 15px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
  }

  small {
    margin-top: 10px;
    color: var(--grey-1);
    font-size: 10px;
  }

  h3 {
    margin: 10px 0px;
    font-size: 15px;
  }

  @media (min-width: 1200px) {
    width: 370px;
    height: 450px;
  }
`

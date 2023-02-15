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
    height: 43px;
    border-radius: 3px;
    border: none;
    background-color: var(--grey-2);
    outline: none;
    padding: 15px 10px;
    color: white;
    transition: 0.2s;
  }

  input:focus {
    outline: 1px solid var(--grey-0);
    ::placeholder {
      color: var(--grey-0);
    }
  }

  input:hover {
    outline: 1px solid var(--grey-0);
    ::placeholder {
      color: var(--grey-0);
    }
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
    cursor: pointer;
    transition: 0.2s linear;
  }

  button:hover {
    background-color: var(--color-primary-focus);
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
    transition: 0.2s linear;
  }

  a:hover {
    background-color: var(--grey-2);
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

  p {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }

  @media (min-width: 1200px) {
    width: 370px;
  }
`

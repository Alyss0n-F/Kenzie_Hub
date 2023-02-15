import styled from "styled-components"

export const StyledFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--grey-3);
  padding: 15px;
  border-radius: 4px;

  width: 100%;
  max-width: 370px;
  margin: 0 auto;

  h3 {
    margin: 40px 0px 15px 0px;
  }

  p {
    margin: 10px 0px 30px 0px;
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }

  input {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: none;
    padding: 15px;
    outline: none;
    background: var(--grey-2);
    color: white;
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
    color: #868e96;
  }

  label {
    margin-top: -10px;
    align-self: flex-start;
    margin-bottom: 10px;
    color: var(--grey-0);
    font-weight: 400;
    font-size: 11px;
  }

  select {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    border: none;
    padding: 0px 12px 0px 12px;
    color: #868e96;
    background-color: var(--grey-2);
  }

  select:focus {
    outline: 1px solid var(--grey-0);
  }

  select:hover {
    outline: 1px solid var(--grey-0);
  }

  button {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    color: white;
    background-color: var(--color-primary);
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s linear;
  }

  button:hover {
    background-color: var(--color-primary-focus);
  }

  @media (min-width: 1200px) {
    width: 370px;
    margin: 0 auto;
    padding: 20px;
  }
`

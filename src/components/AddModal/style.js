import styled from "styled-components"

export const StyledAddModal = styled.div`
  background-color: rgba(0, 0, 0, 0.3);

  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  .modal_content {
    height: 250px;
    width: 90%;
    max-width: 370px;

    .title_container {
      background-color: var(--grey-2);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-radius: 4px 4px 0px 0px;

      button {
        border: none;
        background-color: var(--grey-2);
        color: var(--grey-1);
        cursor: pointer;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 15px;
      background-color: var(--grey-3);
      border-radius: 0px 0px 4px 4px;
      height: 100%;

      input {
        height: 40px;
        padding: 15px;
        background-color: var(--grey-2);
        color: white;
        border: none;
        border-radius: 4px;
        transition: 0.2s;
      }

      input:hover {
        outline: 1px solid var(--grey-0);
        ::placeholder {
          color: white;
        }
      }

      input:focus {
        outline: 1px solid var(--grey-0);
        ::placeholder {
          color: white;
        }
      }

      select {
        height: 40px;
        padding: 0px 15px;
        background-color: var(--grey-2);
        color: white;
        border: none;
        border-radius: 4px;
        transition: 0.2s;
        cursor: pointer;
      }

      select:hover {
        outline: 1px solid var(--grey-0);
      }

      select:focus {
        outline: 1px solid var(--grey-0);
      }

      button {
        height: 40px;
        background-color: var(--color-primary);
        border: none;
        color: white;
        border-radius: 4px;
        transition: 0.2s;
        cursor: pointer;
      }

      button:hover {
        background-color: var(--color-primary-focus);
      }

      label {
        color: var(--grey-0);
        font-size: 10px;
        font-weight: 400;
      }
    }
  }
`

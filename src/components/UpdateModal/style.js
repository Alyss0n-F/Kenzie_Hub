import styled from "styled-components"

export const StyledUpdateModal = styled.div`
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
      height: 50px;
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
        color: var(--grey-1);
        border: none;
        border-radius: 4px;
        transition: 0.2s;
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

      .button_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
      }

      button {
        height: 40px;
        width: 100%;

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

      .delete_button {
        width: 50%;
        background-color: var(--grey-1);
      }

      .delete_button:hover {
        background-color: var(--grey-2);
      }

      label {
        color: var(--grey-0);
        font-size: 10px;
        font-weight: 400;
      }
    }
  }

  .loading_ring {
    border: 6px solid white;
    border-top: 6px solid var(--color-primary);
    margin: 0 auto;
    height: 25px;
    width: 25px;
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

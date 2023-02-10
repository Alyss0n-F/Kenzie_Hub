import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body, h1, h3, label, form, div, button, input, p, small, a{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: var(--grey-4);
        color: white;

        height: 100vh;
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --success: #3FE864;
        --negative: #E83F5B;
    }
`

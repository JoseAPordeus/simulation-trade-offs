import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    header, footer {
        background-color: #2c3e50;
        color: white;
        text-align: center;
        padding: 1em 0;
    }

    main {
        padding: 20px;
    }

    #inputs, #visualizations {
        margin-bottom: 40px;
    }

    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
    }

    label {
        margin: 10px 0 5px;
    }

    input {
        padding: 8px;
        font-size: 1em;
    }

    button {
        margin-top: 20px;
        padding: 10px;
        background-color: #27ae60;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1em;
    }

    button:hover {
        background-color: #2ecc71;
    }

    svg {
        display: block;
        margin: 20px auto;
    }
`;

export default GlobalStyles;
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

    .charts-summary-container {
        display: flex;
        justify-content: space-between;  /* Distribui os gráficos e o resumo com espaço entre eles */
        align-items: flex-start;         /* Alinha os itens no início */
        margin-top: 20px;
        margin-bottom: 20px;
    }

    /* Estilo dos gráficos */
    .chart-container {
        width: 45%;                     /* Define largura para que os gráficos caibam na mesma linha */
        margin: 10px;
        padding: 20px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    }

    /* Estilo do resumo */
    .summary-container {
        width: 45%;                     /* Define largura para que o resumo caiba na mesma linha */
        margin: 10px;
        padding: 20px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    }
`;
export default GlobalStyles;
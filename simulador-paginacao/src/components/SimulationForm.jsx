import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { runSimulation } from '../store/actions';
import SimulationHistory from './SimulationHistory'; 
import { saveAs } from 'file-saver';

// Estilizações dos componentes
const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
`;

const Label = styled.label`
    margin: 10px 0 5px;
`;

const Input = styled.input`
    padding: 8px;
    font-size: 1em;
`;

const Button = styled.button`
    margin-top: 20px;
    padding: 10px;
    background-color: #27ae60;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1em;

    &:hover {
        background-color: #2ecc71;
    }
`;

const ExportButton = styled(Button)`
    background-color: #27ae60;
    &:hover {
        background-color: #2ecc71;
    }
`;

const ClearButton = styled(Button)`
    background-color: #e74c3c;
    &:hover {
        background-color: #c0392b;
    }
`;

// Novo Container para centralizar tudo
const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px; /* Espaço entre os botões */
    margin-top: 20px;
`;

const SimulationForm = () => {
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(4096);
    const [numPages, setNumPages] = useState(1024);
    const [memorySize, setMemorySize] = useState(4194304);
    const [history, setHistory] = useState([]); // Estado para o histórico
    const [result, setResult] = useState(null); // Estado para armazenar o resultado atual

    // Função para enviar os dados e rodar a simulação
    const handleSubmit = (e) => {
        e.preventDefault();
        const simulationResult = { pageSize, numPages, memorySize }; // Objeto com os resultados
        setResult(simulationResult); // Armazena o resultado atual
        setHistory([...history, simulationResult]); // Adiciona ao histórico
        dispatch(runSimulation(simulationResult)); // Executa a simulação
    };

    // Função para exportar os dados em formato CSV
    const handleExportCSV = () => {
        // Lógica para exportar em CSV
        const csvData = history.map(({ pageSize, numPages, memorySize }) => ({
            pageSize,
            numPages,
            memorySize
        }));

        // Conteúdo do CSV
        const csvContent = [
            ['Tamanho da Página', 'Número de Páginas', 'Tamanho da Memória'], // Cabeçalhos
            ...csvData.map(({ pageSize, numPages, memorySize }) => [pageSize, numPages, memorySize])
        ]
            .map(e => e.join(",")) // Formata cada linha como CSV
            .join("\n"); // Junta as linhas com quebra de linha

        // Cria o arquivo Blob e inicia o download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'historico_simulacoes.csv'); // Nome do arquivo
    };

    // Função para limpar o histórico de simulações
    const handleClearHistory = () => {
        setHistory([]); // Limpa o histórico
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="pageSize">Tamanho da Página (em bytes):</Label>
                <Input
                    type="number"
                    id="pageSize"
                    value={pageSize}
                    onChange={(e) => setPageSize(parseInt(e.target.value))}
                    min="512"
                    step="512"
                    required
                />

                <Label htmlFor="numPages">Número de Páginas:</Label>
                <Input
                    type="number"
                    id="numPages"
                    value={numPages}
                    onChange={(e) => setNumPages(parseInt(e.target.value))}
                    min="1"
                    required
                />

                <Label htmlFor="memorySize">Tamanho da Memória (em bytes):</Label>
                <Input
                    type="number"
                    id="memorySize"
                    value={memorySize}
                    onChange={(e) => setMemorySize(parseInt(e.target.value))}
                    min="1024"
                    step="1024"
                    required
                />

                <Button type="submit">Simular</Button>
            </Form>

            {/* Centraliza o histórico e os botões */}
            <CenteredContainer>
                <ButtonContainer>
                    <ExportButton onClick={handleExportCSV}>
                        Exportar Histórico como CSV
                    </ExportButton>

                    <ClearButton onClick={handleClearHistory}>
                        Limpar Histórico
                    </ClearButton>
                </ButtonContainer>

                {/* Exibe o histórico de simulações */}
                <SimulationHistory history={history} />
            </CenteredContainer>
        </div>
    );
};

export default SimulationForm;
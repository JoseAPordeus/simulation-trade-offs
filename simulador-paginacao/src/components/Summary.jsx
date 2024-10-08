import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { saveAs } from 'file-saver'; // Para exportar CSV

const SummaryContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
`;

const Summary = ({ history }) => { // Recebe o histórico como prop
    const pageTableSize = useSelector((state) => state.pageTableSize);
    const internalFragmentation = useSelector((state) => state.internalFragmentation);

    const handleExportCSV = () => {
        // Lógica para exportar o resumo em CSV
        const csvContent = [
            ['Tamanho da Tabela de Páginas', 'Fragmentação Interna'], // Cabeçalhos
            [pageTableSize, internalFragmentation]
        ]
        .map(e => e.join(","))
        .join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'resumo_simulacao.csv'); // Nome do arquivo
    };

    return (
        <SummaryContainer>
            <h2>Resumo dos Resultados</h2>
            <p><strong>Tamanho da Tabela de Páginas:</strong> {pageTableSize} bytes</p>
            <p><strong>Fragmentação Interna:</strong> {internalFragmentation} bytes</p>
            <button onClick={handleExportCSV}>Exportar Resumo como CSV</button> {/* Botão de exportação */}
        </SummaryContainer>
    );
};

export default Summary;
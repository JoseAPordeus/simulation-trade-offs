import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const SummaryContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
`;

const Summary = () => {
    const pageTableSize = useSelector((state) => state.pageTableSize);
    const internalFragmentation = useSelector((state) => state.internalFragmentation);

    return (
        <SummaryContainer>
            <h2>Resumo dos Resultados</h2>
            <p><strong>Tamanho da Tabela de Páginas:</strong> {pageTableSize} bytes</p>
            <p><strong>Fragmentação Interna:</strong> {internalFragmentation} bytes</p>
        </SummaryContainer>
    );
};

export default Summary;
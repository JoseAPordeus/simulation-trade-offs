import React from 'react';
import styled from 'styled-components';

// Estilos para o container principal da seção
const LearnMoreContainer = styled.section`
    background-color: #f4f4f9;
    padding: 40px;
    margin: 20px 0;
    border-radius: 8px;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
`;

const Description = styled.p`
    font-size: 1.2em;
    color: #666;
    margin-bottom: 20px;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const LinkButton = styled.a`
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    font-size: 1em;

    &:hover {
        background-color: #2980b9;
    }
`;

const LearnMoreSection = () => {
    return (
        <LearnMoreContainer>
            <Title>Aprenda Mais sobre Trade-offs</Title>
            <Description>
                A escolha do tamanho da página e outros parâmetros no gerenciamento de memória 
                podem impactar a eficiência do sistema. Explore mais sobre esses conceitos e como 
                eles afetam a fragmentação interna, o tamanho da tabela de páginas, e muito mais.
            </Description>
            <LinksContainer>
                <LinkButton href="https://www.ibm.com/docs/pt-br/aix/7.3?topic=memory-paging-space-concepts" target="_blank">
                    Conceitos de Paginação
                </LinkButton>
                <LinkButton href="https://www.gurusoftware.com/the-definitive-guide-to-memory-management-in-operating-systems/" target="_blank">
                    Otimizações em Memória
                </LinkButton>
            </LinksContainer>
        </LearnMoreContainer>
    );
};

export default LearnMoreSection;
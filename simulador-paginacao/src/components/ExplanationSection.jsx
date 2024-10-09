import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #2c3e50;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #34495e;
  margin-bottom: 10px;
`;

const ExplanationSection = () => {
  return (
    <Section>
      <Title>Entendendo os Trade-offs</Title>
      <Paragraph>
        <strong>Tamanho da Página:</strong> O tamanho da página define quanto espaço é reservado na memória
        para cada página. Tamanhos menores de página podem levar a uma tabela de páginas maior, enquanto
        tamanhos maiores podem causar mais fragmentação interna.
      </Paragraph>
      <Paragraph>
        <strong>Fragmentação Interna:</strong> É o espaço desperdiçado dentro de uma página, quando o processo
        não utiliza completamente o espaço alocado. Fragmentação interna maior indica mais desperdício de
        memória.
      </Paragraph>
      <Paragraph>
        <strong>Tamanho da Tabela de Páginas:</strong> Refere-se à quantidade de entradas na tabela de
        páginas. Tabelas maiores ocupam mais espaço na memória, mas podem reduzir a fragmentação.
      </Paragraph>
      <Paragraph>
        Compreender esses conceitos ajuda a equilibrar o desempenho e o uso de memória nos sistemas
        baseados em paginação.
      </Paragraph>
    </Section>
  );
};

export default ExplanationSection;
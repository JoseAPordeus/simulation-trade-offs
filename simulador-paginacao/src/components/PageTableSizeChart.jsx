import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { useSelector } from 'react-redux';
import { Tooltip as ReactTooltip } from 'react-tooltip'; // Atualização na importação
import 'react-tooltip/dist/react-tooltip.css'; // Importa o CSS da biblioteca

const PageTableSizeChart = () => {
    const svgRef = useRef();
    const pageTableSize = useSelector((state) => state.pageTableSize);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = 400;
        const height = 200;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        svg.selectAll('*').remove(); // Limpa o gráfico anterior

        const x = d3.scaleBand()
            .domain(['Tamanho da Tabela de Páginas'])
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max([pageTableSize, 1000])])
            .nice()
            .range([height - margin.bottom, margin.top]);

        const xAxis = (g) => g
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x));

        const yAxis = (g) => g
            .attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        svg.append('g').call(xAxis);
        svg.append('g').call(yAxis);

        // Adiciona a barra do gráfico para Tamanho da Tabela de Páginas com animação
        svg.selectAll('rect')
            .data([pageTableSize])
            .join(
                enter => enter.append('rect')
                    .attr('x', x('Tamanho da Tabela de Páginas'))
                    .attr('y', y(0))  // Começa no ponto 0
                    .attr('width', x.bandwidth())
                    .attr('height', 0)  // Altura inicial 0
                    .attr('fill', '#3498db')
                    .attr('data-tooltip-id', 'pageSizeTooltip')
                    .attr('data-tooltip-content', `Tamanho: ${pageTableSize} bytes`)
                    .transition()  // Transição de entrada
                    .duration(1000)  // Duração de 1 segundo
                    .attr('y', y(pageTableSize))  // Anima a posição vertical
                    .attr('height', height - margin.bottom - y(pageTableSize)),  // Anima a altura,
                update => update
                    .transition()  // Transição para atualizações
                    .duration(1000)
                    .attr('y', y(pageTableSize))
                    .attr('height', height - margin.bottom - y(pageTableSize))
            );

    }, [pageTableSize]);

    return (
        <>
            <svg ref={svgRef} width={400} height={200}></svg>
            <ReactTooltip id="pageSizeTooltip" />
        </>
    );
};

export default PageTableSizeChart;
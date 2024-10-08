import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { useSelector } from 'react-redux';
import { Tooltip as ReactTooltip } from 'react-tooltip'; // Atualização na importação
import 'react-tooltip/dist/react-tooltip.css'; // Importa o CSS da biblioteca

const InternalFragmentationChart = () => {
    const svgRef = useRef();
    const internalFragmentation = useSelector((state) => state.internalFragmentation);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = 400;
        const height = 200;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        svg.selectAll('*').remove();

        const x = d3.scaleBand()
            .domain(['Fragmentação Interna'])
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max([internalFragmentation, 1000])])
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

        svg.append('rect')
            .attr('x', x('Fragmentação Interna'))
            .attr('y', y(internalFragmentation))
            .attr('width', x.bandwidth())
            .attr('height', height - margin.bottom - y(internalFragmentation))
            .attr('fill', '#e74c3c')
            .attr('data-tooltip-id', 'fragmentationTooltip')
            .attr('data-tooltip-content', `Fragmentação: ${internalFragmentation} bytes`);

    }, [internalFragmentation]);

    return (
        <>
            <svg ref={svgRef} width={400} height={200}></svg>
            <ReactTooltip id="fragmentationTooltip" />
        </>
    );
};

export default InternalFragmentationChart;
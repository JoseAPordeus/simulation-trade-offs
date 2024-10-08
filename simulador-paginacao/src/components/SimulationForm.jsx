import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { runSimulation } from '../store/actions';

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

const SimulationForm = () => {
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(4096);
    const [numPages, setNumPages] = useState(1024);
    const [memorySize, setMemorySize] = useState(4194304);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(runSimulation({ pageSize, numPages, memorySize }));
    };

    return (
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
    );
};

export default SimulationForm;
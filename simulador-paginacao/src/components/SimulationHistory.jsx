import React from 'react';

const SimulationHistory = ({ history }) => {
    return (
        <div className="simulation-history">
            <h2>Histórico de Simulações</h2>
            <ul>
                {history.map((result, index) => (
                    <li key={index}>
                        {/* Exibe o resultado formatado */}
                        {JSON.stringify(result)} 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SimulationHistory;
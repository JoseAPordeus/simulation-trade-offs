export const RUN_SIMULATION = 'RUN_SIMULATION';

export const runSimulation = (params) => {
    const { pageSize, numPages, memorySize } = params;

    // Cálculos
    const pageTableSize = numPages * 4; // 4 bytes por entrada
    const internalFragmentation = (pageSize / 2) * numPages;

    return {
        type: RUN_SIMULATION,
        payload: { pageTableSize, internalFragmentation },
    };
};
import { RUN_SIMULATION } from './actions';

const initialState = {
    pageTableSize: 0,
    internalFragmentation: 0,
};

const simulationReducer = (state = initialState, action) => {
    switch (action.type) {
        case RUN_SIMULATION:
            return {
                ...state,
                pageTableSize: action.payload.pageTableSize,
                internalFragmentation: action.payload.internalFragmentation,
            };
        default:
            return state;
    }
};

export default simulationReducer;
import { createStore } from 'redux';
import simulationReducer from './reducers';

const store = createStore(
    simulationReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
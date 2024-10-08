import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SimulationForm from './components/SimulationForm';
import PageTableSizeChart from './components/PageTableSizeChart';
import InternalFragmentationChart from './components/InternalFragmentationChart';
import Summary from './components/Summary';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <SimulationForm />
                <PageTableSizeChart />
                <InternalFragmentationChart />
                <Summary />
            </main>
            <Footer />
        </div>
    );
};

export default App;
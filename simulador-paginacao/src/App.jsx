import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SimulationForm from './components/SimulationForm';
import PageTableSizeChart from './components/PageTableSizeChart';
import InternalFragmentationChart from './components/InternalFragmentationChart';
import Summary from './components/Summary';
import ExplanationSection from './components/ExplanationSection';
import LearnMoreSection from './components/LearnMoreSection';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <SimulationForm />
                <div className="charts-summary-container">
                  <div className="chart-container">
                    <PageTableSizeChart />
                  </div>
                  <div className="chart-container">
                    <InternalFragmentationChart />
                  </div>
                  <div className="summary-container">
                    <Summary />
                  </div>
                </div>
                <ExplanationSection />
                <LearnMoreSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
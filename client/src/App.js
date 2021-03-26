import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import Mainpages from './components/mainpages/Pages'
import Footer from './components/footer/Footer'


export default function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
         <Header />
         <Mainpages />
         <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}



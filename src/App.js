import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Pool from './pages/pool';
import Staking from './pages/staking';
import Claim from './pages/claim';
import Apply from './pages/apply';
import Header from './shared/components/header';

import './App.scss';
import Footer from './shared/components/footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;

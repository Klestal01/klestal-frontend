import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import Home from './pages/home';
import Pool from './pages/pool';
import Staking from './pages/staking';
import Claim from './pages/claim';
import Apply from './pages/apply';
import Header from './shared/components/header';
import Footer from './shared/components/footer';
import PoolDetails from './pages/pool/[slug]';

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
};

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <Header />
        <div className="py-[10vh] text-white">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/pool">
              <Pool />
            </Route>
            <Route exact path="/staking">
              <Staking />
            </Route>
            <Route exact path="/claim">
              <Claim />
            </Route>
            <Route exact path="/apply">
              <Apply />
            </Route>
            <Route path="/pool/:id">
              <PoolDetails />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </Web3ReactProvider>
  );
};

export default App;

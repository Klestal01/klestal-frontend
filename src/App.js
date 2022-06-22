import Home from './pages/home';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './shared/components/header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-[10vh] pb-[10vh]">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

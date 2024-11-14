import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateGroup from './component/CreateGroup';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<CreateGroup />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;

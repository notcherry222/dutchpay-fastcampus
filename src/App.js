import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateGroup from './component/CreateGroup';
import AddMember from './component/AddMember';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<CreateGroup />} />
          <Route path="/members" element={<AddMember />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;

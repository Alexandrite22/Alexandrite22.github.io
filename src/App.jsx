import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import SidebarLayout from './components/SidebarLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;

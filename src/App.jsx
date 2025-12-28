import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './views/HomePage';
import SidebarLayout from './components/SidebarLayout';
import ToolsView from './views/ToolsView';
import FractalTool from './components/FractalTool';
import PlaceholderTool from './components/PlaceholderTool';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/tools" element={<ToolsView />}>
          <Route index element={<Navigate to="fractal" replace />} />
          <Route path="fractal" element={<FractalTool />} />
          <Route path="placeholder" element={<PlaceholderTool />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

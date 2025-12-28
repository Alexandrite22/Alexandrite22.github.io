import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './views/HomePage';
import SidebarLayout from './components/SidebarLayout';
import ToolsView from './views/ToolsView';
import FractalTool from './components/FractalTool';
import Placeholder from './components/Placeholder';
import ComponentsView from './views/ComponentsView';
import DevAlert from './components/DevAlert';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/tools" element={<ToolsView />}>
          <Route index element={<FractalTool />} />
          <Route path="fractal" element={<Navigate to="/tools" replace />} />
          <Route path="placeholder" element={<Placeholder />} />
        </Route>
        <Route path="/components" element={<ComponentsView />}>
          <Route index element={<DevAlert />} />
          <Route path="alerts" element={<Navigate to="/components" replace />} />
          <Route path="alert-dropdown" element={<Navigate to="/components" replace />} />
          <Route path="placeholder" element={<Placeholder />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

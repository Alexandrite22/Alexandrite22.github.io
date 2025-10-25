import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Components from './views/Components';
import ReposPage from './views/ReposPage';
import SocialsPage from './views/SocialsPage';
import SidebarLayout from './components/SidebarLayout';
import AlertsShowcase from './views/AlertsShowcase';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />}>
        <Route index element={<HomePage />} />
        <Route path="components" element={<Components />}>
          <Route path="alerts" element={<AlertsShowcase />} />
        </Route>
        <Route path="repos" element={<ReposPage />} />
        <Route path="socials" element={<SocialsPage />}/>
      </Route>
    </Routes>
  );
}

export default App;

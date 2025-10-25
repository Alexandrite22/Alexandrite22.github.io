import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { useScreenSize, useResponsiveSizes } from '../hooks/useScreenSize';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Components = () => {
  const { isLandscape } = useScreenSize();
  const { respSM } = useResponsiveSizes();

  const location = useLocation();
  const getTabIndex = React.useCallback(() => {
    const path = location.pathname;
    if (path.includes('alerts')) return 0;
    if (path.includes('file-uploader')) return 1;
    if (path.includes('team-manager')) return 2;
    return 0;
  }, [location.pathname]);

  return (
    <Tabs index={getTabIndex()}>
      <TabList>
        <Tab>
          <Link to="/components/alerts">Alerts</Link>
        </Tab>
        <Tab>
          <Link to="/components/file-uploader">File Uploader</Link>
        </Tab>
        <Tab>
          <Link to="/components/team-manager">Team Manager</Link>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Outlet />
        </TabPanel>
        <TabPanel>
          <Outlet />
        </TabPanel>
        <TabPanel>
          <Outlet />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Components;

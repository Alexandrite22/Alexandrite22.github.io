import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { useScreenSize, useResponsiveSizes } from '../hooks/useScreenSize';

const Components = () => {
  const { isLandscape } = useScreenSize();
  const { respSM } = useResponsiveSizes();
  return (
    <Tabs>
      <TabList>
        <Tab>Alerts</Tab>
        <Tab>File Uploader</Tab>
        <Tab>Team Manager</Tab>
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

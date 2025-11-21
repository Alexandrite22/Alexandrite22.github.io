import { Flex } from '@chakra-ui/react';
import { useScreenSize, useResponsiveSizes } from '../hooks/useScreenSize';
import BioCard from '../components/BioCard';

const HomePage = () => {
  const { isLandscape } = useScreenSize();
  const { respSM } = useResponsiveSizes();
  return (
    <Flex flexDirection="column" flex={1} minH={0} gap={respSM} height={isLandscape ? 'full' : 'auto'}>
      <BioCard />
      <Flex
        flexDirection={isLandscape ? 'row' : 'column'}
        justifyContent="space-between"
        alignItems={isLandscape ? 'stretch' : 'flex-start'}
        gap={respSM}
        flex={1}
        minH={0}
      >
      </Flex>
    </Flex>
  );
};

export default HomePage;

import { Flex } from '@chakra-ui/react';
import { useScreenSize, useResponsiveSizes } from '../hooks/useScreenSize';
import BioCard from '../components/BioCard';
import InfoCard from '../components/InfoCard';
import cards from '../assets/cards.json';

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
        <InfoCard title={cards.bio.title} content={cards.bio.content} />
        <InfoCard title={cards.hardSkills.title} content={cards.hardSkills.content} />
        <InfoCard title={cards.softSkills.title} content={cards.softSkills.content} />
      </Flex>
    </Flex>
  );
};

export default HomePage;

import { Flex } from '@chakra-ui/react';
import { useScreenSize } from '../hooks/useScreenSize';
import BioCard from '../components/BioCard';
import InfoCard from '../components/InfoCard';
import cards from '../assets/cards.json';

const HomePage = () => {
  const { isLandscape } = useScreenSize();
  return (
    <>
      <BioCard />
      <Flex
        flexDirection={isLandscape ? 'row' : 'column'}
        justifyContent="space-between"
        alignItems={{ base: 'flex-start', lg: 'stretch' }}
        gap="1rem"
        flex={1}
        minH={0}
      >
        <InfoCard title={cards.bio.title} content={cards.bio.content} />
        <InfoCard title={cards.hardSkills.title} content={cards.hardSkills.content} />
        <InfoCard title={cards.softSkills.title} content={cards.softSkills.content} />
      </Flex>
    </>
  );
};

export default HomePage;

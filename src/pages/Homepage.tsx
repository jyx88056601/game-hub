import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';
import GameHeading from '../components/GameHeading';
import GameGrid from '../components/GameGrid';

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // wider than 1024 px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
 
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
              <PlatformSelector />
          </Box>
          <Box marginRight={5}>
            <SortSelector /> 
          </Box>
          <GameHeading />
        </Flex>
         <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default Homepage
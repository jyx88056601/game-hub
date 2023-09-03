import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/interfaces";
import PlatformIconList from "./PlatformIconList";
import CritiScore from "./CriticScore";

import getCroppedImageUrl from "../services/image-url";
// Game is just an interface and it has nothing to do with data
interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CritiScore score={game.metacritic}></CritiScore>
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GameCard;

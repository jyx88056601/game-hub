import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import {  GridItem, Heading,  SimpleGrid,  Spinner  } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import ScreenShot from "../components/ScreenShot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const  {data:game, isLoading, error} = useGame(slug!); // slug is never be null
 
  if(isLoading) return <Spinner />
  if(error || !game) throw error;

  return (
    <SimpleGrid column={{base:1,md:2}} spacing={5}>
       <GridItem>
     <Heading>{game?.name}</Heading>
     <ExpandableText >{game.description_raw}</ ExpandableText>
     <GameAttributes game={game}/>
     </GridItem>
     <GridItem>
     <GameTrailer id={game.id}></GameTrailer>
     <ScreenShot id={game.id}></ScreenShot>
     </GridItem>
     </SimpleGrid>
  )
}

export default GameDetailPage
import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const  {data:game, isLoading, error} = useGame(slug!); // slug is never be null
  console.log(game);
  if(isLoading) return <Spinner />
  if(error) throw error;
  return (
     <VStack>
     <Heading>{game?.name}</Heading>
     <Text>{game?.description_raw} </Text> 
     </VStack>
  )
}

export default GameDetailPage
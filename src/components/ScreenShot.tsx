import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
    id:number;
}

const ScreenShot = ({id} : Props) => {
  const {data, isLoading, error} = useScreenshots(id);
  if(error) throw error;
  if(isLoading) return null;
  return (<SimpleGrid spacing={2} column={{base:1, md: 2}}>
            {data?.results.map((file) => <Image src={file.image} key={file.id}></Image>)}
         </SimpleGrid>);
}

export default ScreenShot
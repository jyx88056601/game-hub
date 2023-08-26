import { Badge } from "@chakra-ui/react";

interface criticScoreProps {
  score: number;
}

const criticScore = ({ score }: criticScoreProps) => {
  let color = score > 75 ? "green" : "yellow";
  return (
    <Badge fontSize={14} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default criticScore;

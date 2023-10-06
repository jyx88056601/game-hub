import { useState } from "react";
import {  Button, Text } from "@chakra-ui/react"
interface Props {
    children: string;
}

const ExpandableText = ({ children} : Props) => {
    const [expanded, setExpanded] = useState(false);
    if(!children) return null;
    const limitedDescription = children.substring(0, 300);
    
    return expanded?  <Text> {children} <Button size="sm" onClick={() => setExpanded(!expanded)}>Show less</Button></Text> :
                      <Text> {limitedDescription}... <Button size="sm" onClick={() => setExpanded(!expanded)}>Read more</Button></Text>;

}

export default ExpandableText
import { HStack, Image } from "@chakra-ui/react"; // horizontal stack
import logo from "../assets/logo.webp"; // import image from the folder
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "../components/SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // justifyContent="space-between": move the swith to the right side and padding is to create space to the right side
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit='cover'></Image>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;

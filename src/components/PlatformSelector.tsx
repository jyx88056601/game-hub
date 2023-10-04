import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlateforms from "../hooks/usePlatforms";
import usePlateform from "../hooks/usePlatform";
import useGameQueryStore from "../services/store";

const PlatformSelector = () => {
  const { data, error } = usePlateforms();
  const selectedplatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const selectedPlatform = usePlateform(selectedplatformId);
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);
 
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() =>  setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

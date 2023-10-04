import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../services/store";
 
const SortSelector = () => { 
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setOrder = useGameQueryStore(s => s.setSortOrder);

  const sortOrders = [
    { value: "", lable: "Relavance" },
    { value: "-added", lable: "Date added" },
    { value: "-name", lable: "Name" },
    { value: "-released", lable: "Released date" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];

  const currentOrder = sortOrders.find((order) => sortOrder === order.value);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentOrder?.lable || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setOrder(order.value)}
            value={order.value}
            key={order.value}
          >
            {order.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

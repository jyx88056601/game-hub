import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/interfaces";

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string | null;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: SortSelectorProps) => {
  /*ordering	string
Available fields: name, released, added, created, updated, rating, metacritic. 
You can reverse the sort order adding a hyphen, for example: -released. */

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
            onClick={() => onSelectSortOrder(order.value)}
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

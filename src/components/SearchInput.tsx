import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../services/store";
import { useNavigate } from "react-router-dom";
 
const SearchInput = ( ) => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore( s => s.setSearchText);
  const navigator = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigator("/");
        };
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games...."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

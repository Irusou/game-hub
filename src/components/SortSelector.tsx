import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {}
export default function SortSelector(props: SortSelectorProps) {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release Date</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Average Rate</MenuItem>
			</MenuList>
		</Menu>
	);
}

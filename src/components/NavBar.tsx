import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/orange-cat.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

interface NavBarProps {
	onSearch: (searchText: string) => void;
}
export default function NavBar({ onSearch }: NavBarProps) {
	return (
		<>
			<HStack padding="10px">
				<Image src={logo} boxSize="60px" borderRadius="8px" />
				<SearchInput onSearch={onSearch} />
				<ColorModeSwitch />
			</HStack>
		</>
	);
}

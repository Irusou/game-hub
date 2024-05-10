import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/orange-cat.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

interface NavBarProps {}
export default function NavBar(props: NavBarProps) {
	return (
		<>
			<HStack padding="10px">
				<Image src={logo} boxSize="60px" borderRadius="8px" />
				<SearchInput />
				<ColorModeSwitch />
			</HStack>
		</>
	);
}

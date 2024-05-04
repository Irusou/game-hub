import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/orange-cat.png";
import ColorModeSwitch from "./ColorModeSwitch";

interface NavBarProps {}
export default function NavBar(props: NavBarProps) {
	return (
		<>
			<HStack justifyContent="space-between" padding="10px">
				<Image src={logo} boxSize="60px" rounded={30} />
				<ColorModeSwitch />
			</HStack>
		</>
	);
}

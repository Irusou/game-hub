import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

interface NavBarProps {}
export default function NavBar(props: NavBarProps) {
	return (
		<>
			<HStack justifyContent="space-between" padding="10px">
				<Image src={logo} boxSize="60px" />
				<ColorModeSwitch />
			</HStack>
		</>
	);
}

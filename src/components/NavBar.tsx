import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

interface NavBarProps {}
export default function NavBar(props: NavBarProps) {
	return (
		<>
			<HStack>
				<Image src={logo} boxSize="60" />
				<Text>NavBar</Text>
			</HStack>
		</>
	);
}

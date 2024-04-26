import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

interface ColorModeSwitchProps {}
export default function ColorModeSwitch(props: ColorModeSwitchProps) {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<>
			<HStack>
				<Switch
					colorScheme="red"
					isChecked={colorMode === "dark"}
					onChange={toggleColorMode}
				/>
				<Text>Dark Mode</Text>
			</HStack>
		</>
	);
}

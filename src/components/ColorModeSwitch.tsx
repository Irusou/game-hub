import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

interface ColorModeSwitchProps {}
export default function ColorModeSwitch(props: ColorModeSwitchProps) {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<>
			<HStack>
				<Switch
					colorScheme="blue"
					isChecked={colorMode === "dark"}
					onChange={toggleColorMode}
				/>
				<Text whiteSpace="nowrap">Dark Mode</Text>
			</HStack>
		</>
	);
}

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
	children: ReactNode;
}
export default function GameCardContainer({
	children,
}: GameCardContainerProps) {
	return (
		<Box width="300px" overflow="hidden" borderRadius={10}>
			{children}
		</Box>
	);
}

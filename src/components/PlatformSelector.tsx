import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "./../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface PlatformSelectorProps {
	onSelectPlatforms: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}
export default function PlatformSelector({
	onSelectPlatforms,
	selectedPlatform,
}: PlatformSelectorProps) {
	const { data, error, isLoading } = usePlatforms();
	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name}
			</MenuButton>
			<MenuList>
				{data.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => onSelectPlatforms(platform)}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}
import useGenres from "../hooks/useGenres";

interface GenreListProps {}

export default function GenreList({}: GenreListProps) {
	const { data, error, isLoading } = useGenres();
	return (
		<ul>
			{data.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	);
}

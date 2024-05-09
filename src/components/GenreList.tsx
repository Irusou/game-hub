import { useGenres } from "../hooks/useGenres";

interface GenreListProps {}

export default function GenreList(props: GenreListProps) {
	const { genres, error, isLoading } = useGenres();
	return (
		<ul>
			{genres.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	);
}

import { getCharacterById, getCharacters } from "@/app/api";
import { useEffect, useState } from "react";
import CharacterCard, { Character } from "./CharacterCard";
import { Episode } from "./EpisodeCard";

const CharacterBoard = ({ title, onSelection }) => {
	const [charactersList, setCharactersList] = useState<Character[]>([]);
	const [selection, setSelection] = useState<number>();
	const [pagination, setPagination] = useState<any>();

	const getCharacterEpisodes = async (id: Character["id"]) => {
		const characterInfo = await getCharacterById(id);
		return characterInfo.episodes;
	};
	const getCharactersList = (url?: string) => {
		console.log("URL", url);
		getCharacters(url).then((res) => {
			setPagination(res.data.info);
			setCharactersList(res.data.results);
		});
	};
	useEffect(() => {
		getCharactersList();
	}, []);

	const handleSelectCharacter = async (characterId: Character["id"]) => {
		const episodes = await getCharacterEpisodes(characterId);
		setSelection(characterId);
		onSelection(episodes);
	};

	return (
		<div className="col-auto">
			<h1 className="text-2xl">{title}</h1>
			<button
				className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
				disabled={!pagination?.prev}
				onClick={() => getCharactersList(pagination?.prev.split("/api/")[1])}
			>
				Prev
			</button>
			{}
			<button
				className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
				disabled={!pagination?.next}
				onClick={() => getCharactersList(pagination?.next.split("/api/")[1])}
			>
				Next
			</button>
			<div className="">
				{charactersList.map((character) => (
					<CharacterCard
						onClick={() => handleSelectCharacter(character.id)}
						isSelected={selection === character.id}
						key={character.id}
						name={character.name}
						status={character.status}
						species={character.species}
						image={character.image}
					/>
				))}
			</div>
		</div>
	);
};

export default CharacterBoard;

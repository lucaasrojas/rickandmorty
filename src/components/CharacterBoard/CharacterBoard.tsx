import { getCharacterById, getCharacters } from "@/app/api";
import { useEffect, useState } from "react";
import CharacterCard, { Character } from "../CharacterCard";
import { Episode } from "../EpisodeCard";
import Pagination from "../Pagination/Pagination";

interface CharacterBoard {
	title: string;
	onSelection: (episodes: Episode[]) => void;
}

const CharacterBoard: React.FC<CharacterBoard> = ({ title, onSelection }) => {
	const [charactersList, setCharactersList] = useState<Character[]>([]);
	const [selection, setSelection] = useState<number>();
	const [pagination, setPagination] = useState<any>();

	const getCharacterEpisodes = async (id: Character["id"]) => {
		const characterInfo = await getCharacterById(id);
		return characterInfo.episodes;
	};
	const getCharactersList = (url?: string) => {
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
		<div className="col-auto flex flex-col">
			<h1 className="text-2xl" data-testid="character-board-title">{title}</h1>
			<Pagination
				isNextDisabled={!pagination?.next}
				onNext={
					() => getCharactersList(pagination?.next.split("/api/")[1])
				}
				isPrevDisabled={!pagination?.prev}
				onPrev={() => getCharactersList(pagination?.prev.split("/api/")[1])}
			/>

			<div data-testid="list-container" className="max-h-80 min-h-80 overflow-y-scroll grid sm:grid-cols-1 lg:grid-cols-2 gap-4 ">
				{charactersList.map((character) => (
					<div key={character.id} className="col-auto flex flex-col">
						<CharacterCard
							onClick={() => handleSelectCharacter(character.id)}
							isSelected={selection === character.id}
							name={character.name}
							status={character.status}
							species={character.species}
							image={character.image}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CharacterBoard;
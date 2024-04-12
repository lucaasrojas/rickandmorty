import React from "react";
import { Episode } from "./EpisodeCard";
import CharacterBoard from "./CharacterBoard/CharacterBoard";
interface CharactersContainer {
	onCharacterOneSelection: (episodes: Episode[]) => void;
	onCharacterTwoSelection: (episodes: Episode[]) => void;
}
const CharactersContainer: React.FC<CharactersContainer> = ({
	onCharacterOneSelection,
	onCharacterTwoSelection,
}) => {
	return (
		<div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 flex max-h-full h-full w-full">
			<CharacterBoard
				title={"Character #1"}
				onSelection={(episodes) => onCharacterOneSelection(episodes)}
			/>
			<CharacterBoard
				title={"Character #2"}
				onSelection={(episodes) => onCharacterTwoSelection(episodes)}
			/>
		</div>
	);
};

export default CharactersContainer;

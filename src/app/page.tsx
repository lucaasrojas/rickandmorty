"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCharacterById, getCharacters } from "./api";
import CharacterCard from "@/components/CharacterCard";

export default function Home() {
	const [charactersList, setCharactersList] = useState([]);
	const [characterOneSelection, setCharacterOneSelection] = useState();
	const [characterTwoSelection, setCharacterTwoSelection] = useState();
	const [characterOneEpisodes, setCharacterOneEpisodes] = useState([]);
	const [characterTwoEpisodes, setCharacterTwoEpisodes] = useState([]);
	const [sharedEpisodes, setSharedEpisodes] = useState([]);
	const getCharactersList = () => {
		getCharacters().then((res) => {
			setCharactersList(res.data.results);
		});
	};
	const getCharacterEpisodes = async (id) => {
		const characterInfo = await getCharacterById(id);
		return characterInfo.episodes;
	};
	useEffect(() => {
		getCharactersList();
	}, []);

	useEffect(() => {
		characterOneEpisodes.forEach((episode) => {
			let episodes = [];
			if (characterTwoEpisodes.find((ep) => ep.name === episode.name)) {
				episodes.push(episode);
			}

			setSharedEpisodes(episodes);
		});
	}, [characterOneEpisodes, characterTwoEpisodes]);

	const handleSelectCharacter = async (characterId, isOne) => {
		const episodes = await getCharacterEpisodes(characterId);
		if (isOne) {
			setCharacterOneSelection(characterId);
			setCharacterOneEpisodes(episodes);
		} else {
			setCharacterTwoEpisodes(episodes);
		}
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			<div className="grid grid-cols-2 gap-4">
				<div className="col-auto">
					<h1>Character #1</h1>
					<div className="">
						{charactersList.map((character) => (
							<CharacterCard
								onClick={() => handleSelectCharacter(character.id, true)}
								style={{
									backgroundColor:
										characterOneSelection === character.id
											? "red"
											: "transparent",
								}}
								key={character.id}
								name={character.name}
								status={character.status}
								species={character.species}
								image={character.image}
							/>
						))}
					</div>
				</div>
				<div className="col-auto">
					<h1>Character #2</h1>
					<div>
						<ul>
							{charactersList.map((character) => (
								<CharacterCard
									onClick={() => handleSelectCharacter(character.id, false)}
									style={{
										backgroundColor:
											characterTwoSelection === character.id
												? "red"
												: "transparent",
									}}
									key={character.id}
									name={character.name}
									status={character.status}
									species={character.species}
									image={character.image}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<div className="col-auto">
					<h1>Character #1 - Only episodes</h1>
					<div>
						<ul>
							{characterOneEpisodes.map((episode) => (
								<li>
									{episode.episode}-{episode.name}-{episode.air_date}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="col-auto">
					<h1>Character #1 & #2 - Shared episodes</h1>

					<div>
						<ul>
							{sharedEpisodes.map((episode) => (
								<li>
									{episode.episode}-{episode.name}-{episode.air_date}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="col-auto">
					<h1>Character #2 - Only episodes</h1>
					<div>
						<ul>
							{characterTwoEpisodes.map((episode) => (
								<li>
									{episode.episode}-{episode.name}-{episode.air_date}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}

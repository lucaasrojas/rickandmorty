"use client";
import { useEffect, useState } from "react";
import { getCharacterById, getCharacters } from "./api";
import CharacterCard, { Character } from "@/components/CharacterCard";
import EpisodeCard, { Episode } from "@/components/EpisodeCard";
import CharacterBoard from "@/components/CharacterBoard";

export default function Home() {
	const [characterOneEpisodes, setCharacterOneEpisodes] = useState<Episode[]>(
		[]
	);
	const [characterTwoEpisodes, setCharacterTwoEpisodes] = useState<Episode[]>(
		[]
	);
	const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

	useEffect(() => {
		characterOneEpisodes.forEach((episode) => {
			let episodes: Episode[] = [];
			if (characterTwoEpisodes.find((ep) => ep.name === episode.name)) {
				episodes.push(episode);
			}

			setSharedEpisodes(episodes);
		});
	}, [characterOneEpisodes, characterTwoEpisodes]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			<div className="grid grid-cols-2 gap-4">
				<CharacterBoard
					title={"Character #1"}
					onSelection={(episodes) => setCharacterOneEpisodes(episodes)}
				/>
				<CharacterBoard
					title={"Character #2"}
					onSelection={(episodes) => setCharacterTwoEpisodes(episodes)}
				/>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<div className="col-auto justify-center flex-col">
					<h1 className="lg:text-base xl:text-xl text-center">
						Character #1 - Only episodes
					</h1>
					<div>
						{characterOneEpisodes.map((episode) => (
							<EpisodeCard
								key={`epChar1-${episode.id}`}
								name={episode.name}
								episode={episode.episode}
								air_date={episode.air_date}
							/>
						))}
					</div>
				</div>
				<div className="col-auto justify-center flex-col">
					<h1 className="lg:text-base xl:text-xl text-center">
						Character #1 & #2 - Shared episodes
					</h1>

					<div>
						{sharedEpisodes.map((episode) => (
							<EpisodeCard
								key={`epCharShared-${episode.id}`}
								name={episode.name}
								episode={episode.episode}
								air_date={episode.air_date}
							/>
						))}
					</div>
				</div>
				<div className="col-auto justify-center flex-col">
					<h1 className="lg:text-base xl:text-xl text-center">
						Character #2 - Only episodes
					</h1>
					<div>
						{characterTwoEpisodes.map((episode) => (
							<EpisodeCard
								key={`epChar2-${episode.id}`}
								name={episode.name}
								episode={episode.episode}
								air_date={episode.air_date}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

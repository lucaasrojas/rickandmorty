"use client";
import { useEffect, useState } from "react";
import { Episode } from "@/components/EpisodeCard";
import Footer from "@/components/Footer";
import EpisodesContainer from "@/components/EpisodesContainer";
import CharactersContainer from "@/components/CharactersContainer";

export default function Home() {
	const [characterOneEpisodes, setCharacterOneEpisodes] = useState<Episode[]>(
		[]
	);
	const [characterTwoEpisodes, setCharacterTwoEpisodes] = useState<Episode[]>(
		[]
	);
	const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

	useEffect(() => {
		const episodes = characterTwoEpisodes.filter((ep) =>
			Boolean(characterOneEpisodes.find((ep2) => ep2.id === ep.id))
		);
		setSharedEpisodes(episodes);
	}, [characterOneEpisodes, characterTwoEpisodes]);

	return (
		<main className="flex flex-col items-center justify-between min-h-screen h-full max-h-full">
			<div className="p-12 h-full grow flex flex-col">

			<CharactersContainer
				onCharacterOneSelection={(episodes) =>
					setCharacterOneEpisodes(episodes)
				}
				onCharacterTwoSelection={(episodes) =>
					setCharacterTwoEpisodes(episodes)
				}
				/>
			<EpisodesContainer
				sharedEpisodes={sharedEpisodes}
				characterOneEpisodes={characterOneEpisodes}
				characterTwoEpisodes={characterTwoEpisodes}
				/>
				</div>
			<Footer />
		</main>
	);
}

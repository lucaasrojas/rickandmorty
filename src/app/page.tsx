"use client";
import { useEffect, useState } from "react";
import { Episode } from "@/components/EpisodeCard";
import CharacterBoard from "@/components/CharacterBoard/CharacterBoard";
import EpisodeBoard from "@/components/EpisodeBoard/EpisodeBoard";
import LinkedInIcon from "./ui/LinkedInIcon";
import GithubIcon from "./ui/GithubIcon";
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
		<main className="flex flex-col items-center justify-between px-12 pt-12 h-screen max-h-screen gap-2">
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
			<Footer />
		</main>
	);
}

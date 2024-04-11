"use client";
import { useEffect, useState } from "react";
import { Episode } from "@/components/EpisodeCard";
import CharacterBoard from "@/components/CharacterBoard/CharacterBoard";
import EpisodeBoard from "@/components/EpisodeBoard/EpisodeBoard";

export default function Home() {
	const [characterOneEpisodes, setCharacterOneEpisodes] = useState<Episode[]>(
		[]
	);
	const [characterTwoEpisodes, setCharacterTwoEpisodes] = useState<Episode[]>(
		[]
	);
	const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

	useEffect(() => {
		const episodes = characterTwoEpisodes.filter(ep => Boolean(characterOneEpisodes.find(ep2 => ep2.id === ep.id))	)
			setSharedEpisodes(episodes);
		
	}, [characterOneEpisodes, characterTwoEpisodes]);

	return (
		<main className="flex flex-col items-center justify-between p-12">
			<div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 flex max-h-full h-full w-full">
				<CharacterBoard
					title={"Character #1"}
					onSelection={(episodes) => setCharacterOneEpisodes(episodes)}
				/>
				<CharacterBoard
					title={"Character #2"}
					onSelection={(episodes) => setCharacterTwoEpisodes(episodes)}
				/>
			</div>
			<div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 flex w-full">
				<div className="col-auto justify-right flex-col flex max-h-100">
					<EpisodeBoard 
						episodes={characterOneEpisodes}
						title="Character #1 - Only episodes"
					/>
				</div>
				<div className="col-auto justify-right flex-col flex max-h-100">
				<EpisodeBoard 
						episodes={sharedEpisodes}
						title="Character #1 & #2 - Shared episodes"
					/>
					
				</div>
				<div className="col-auto justify-right flex-col flex max-h-100">
				<EpisodeBoard 
						episodes={characterTwoEpisodes}
						title="Character #2 - Only episodes"
					/>
					
				</div>
			</div>
		</main>
	);
}

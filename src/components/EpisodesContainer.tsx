import React from "react";
import EpisodeBoard from "./EpisodeBoard/EpisodeBoard";
import { Episode } from "./EpisodeCard";
interface EpisodesContainer {
	characterOneEpisodes: Episode[];
	sharedEpisodes: Episode[];
	characterTwoEpisodes: Episode[];
}
const EpisodesContainer: React.FC<EpisodesContainer> = ({
	characterOneEpisodes,
	sharedEpisodes,
	characterTwoEpisodes,
}) => {
	return (
		<div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 flex w-full h-full">
			<div className="col-auto justify-right flex-col flex max-h-full h-full">
				<EpisodeBoard
					episodes={characterOneEpisodes}
					title="Character #1 - Only episodes"
				/>
			</div>
			<div className="col-auto justify-right flex-col flex max-h-full h-full">
				<EpisodeBoard
					episodes={sharedEpisodes}
					title="Character #1 & #2 - Shared episodes"
				/>
			</div>
			<div className="col-auto justify-right flex-col flex max-h-full h-full">
				<EpisodeBoard
					episodes={characterTwoEpisodes}
					title="Character #2 - Only episodes"
				/>
			</div>
		</div>
	);
};

export default EpisodesContainer;

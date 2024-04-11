import React from "react";
import EpisodeCard, { Episode } from "../EpisodeCard"
interface EpisodeBoard {
    episodes: Episode[];
    title: string;
}
const EpisodeBoard: React.FC<EpisodeBoard> = ({ episodes, title }) => {
    return (
        <>
            <h1 className="lg:text-base xl:text-xl text-center max-h-screen h-100" data-testid="episode-board-title">
                {title} - Total: {episodes.length}
            </h1>
            <div className="max-h-40 overflow-y-auto">
                {episodes.map((episode) => (
                    <EpisodeCard
                        key={`epChar1-${episode.id}`}
                        name={episode.name}
                        episode={episode.episode}
                        air_date={episode.air_date}
                    />
                ))}
            </div>
        </>
    )
}

export default EpisodeBoard
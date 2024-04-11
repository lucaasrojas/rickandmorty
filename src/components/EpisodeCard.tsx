export type Episode = {
	name: string;
	episode: string;
	air_date: string;
	id?: number;
};

const EpisodeCard: React.FC<Episode> = ({ name, episode, air_date }) => {
	return (
		<div className={`flex bg-white rounded p-4 flex flex-col my-2`} data-testid="episode-card">
			<div className="">
				<div className="text-gray-900 font-bold text-xl">{name}</div>
				<p className="text-gray-700 text-base">
					{episode} - {air_date}
				</p>
			</div>
		</div>
	);
};

export default EpisodeCard;

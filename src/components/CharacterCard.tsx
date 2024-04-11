import Image from "next/image";

interface CharacterCard {
	name: string;
	status: string;
	species: string;
	image: string;
	onClick: () => void;
}

const CharacterCard: React.FC<CharacterCard> = ({
	name,
	status,
	species,
	image,
	onClick,
}) => {
	return (
		<div className="w-full" onClick={() => onClick()}>
			<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
				<Image src={image} alt={name} width={100} height={100} />
				<div className="mb-8">
					<div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
					<p className="text-gray-700 text-base">
						{status} - {species}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;

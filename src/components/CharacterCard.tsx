import Image from "next/image";

export type Character = {
	name: string;
	status: string;
	species: string;
	id?: number;
	image: string;
};
interface CharacterCard extends Character {
	isSelected: boolean;
	onClick: () => void;
}

const CharacterCard: React.FC<CharacterCard> = ({
	name,
	status,
	species,
	image,
	isSelected,
	onClick,
}) => {
	return (
		<div className="w-full flex-row py-1" onClick={() => onClick()}>
			<div
				className={`flex border-solid border-4 flex-row ${
					isSelected ? "border-purple-400" : "border-white"
				} bg-white rounded p-4 flex gap-4`}
			>
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

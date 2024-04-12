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

const COLORS_BY_STATUS: { [key: string]: string } = {
	Alive: "bg-green-600",
	Dead: "bg-red-600",
	Unknown: "bg-grey-600",
};

const CharacterCard: React.FC<CharacterCard> = ({
	name,
	status,
	species,
	image,
	isSelected,
	onClick,
}) => {
	return (
		<div
			className="w-full flex-row py-1 h-full cursor-pointer"
			data-testid="character-card"
			onClick={() => onClick()}
		>
			<div
				className={`flex border-solid border-4 flex-row h-full ${
					isSelected ? "border-purple-400" : "border-white"
				} hover:border-sky-400 bg-white rounded p-4 flex gap-4`}
			>
				<Image src={image} alt={name} width={100} height={100} />
				<div className="mb-8">
					<div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
					<div className="text-gray-700 text-base flex flex-row items-center gap-2">
						<div
							style={{ width: 10, height: 10, borderRadius: 50 }}
							className={`${COLORS_BY_STATUS[status]}`}
						></div>
						<p>
							{status} - {species}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;

import React from "react";
import Button from "../Button";
import ChevronLeft from "@/app/ui/ChevronLeft";
import ChevronRight from "@/app/ui/ChevronRight";

interface Pagination {
	onNext: () => void;
	isNextDisabled: boolean;
	onPrev: () => void;
	isPrevDisabled: boolean;
}

const Pagination: React.FC<Pagination> = ({
	onNext,
	isNextDisabled,
	onPrev,
	isPrevDisabled,
}) => {
	return (
		<div className="flex flex-row gap-4 py-2 pr-4 justify-center">
			<Button
				isDisabled={isPrevDisabled}
				onClick={() => onPrev}
				data-testid="prev-btn"
			>
				<ChevronLeft />
			</Button>
			<Button
				isDisabled={isNextDisabled}
				onClick={onNext}
				data-testid="next-btn"
			>
				<ChevronRight />
			</Button>
		</div>
	);
};

export default Pagination;

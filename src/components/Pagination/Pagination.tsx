import React from "react"
import Button from "../Button"

interface Pagination {
    onNext: () => void,
    isNextDisabled: boolean,
    onPrev: () => void,
    isPrevDisabled: boolean
}

const Pagination: React.FC<Pagination> = ({
    onNext,
    isNextDisabled,
    onPrev,
    isPrevDisabled
}) => {
    return (
        <div className="flex flex-row gap-4 py-2 pr-4 justify-center">
            <Button
                isDisabled={isPrevDisabled}
                onClick={() => onPrev}
                data-testid="prev-btn"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

            </Button>
            <Button
                isDisabled={isNextDisabled}
                onClick={onNext}
                data-testid="next-btn"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

            </Button>
        </div>
    )
}

export default Pagination
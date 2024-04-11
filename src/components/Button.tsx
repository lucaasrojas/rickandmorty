interface Button {
	children: React.ReactNode;
	onClick: () => void;
	isDisabled: boolean;
}
const Button:React.FC<Button> = ({onClick, children, isDisabled,...rest}) => {
	return(
		<button
				className="bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded"
				disabled={isDisabled}
				onClick={() => onClick()}
                {...rest}
			>
				{children}
			</button>
	)
}

export default Button
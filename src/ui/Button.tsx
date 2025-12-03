import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	variant?: "primary" | "secondary";
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	disabled?: boolean;
};

const Button = ({ children, className, variant = "primary", disabled, onClick, type }: ButtonProps) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			type={type}
			className={`sm:py-2.5 py-2 px-5 sm:px-7 rounded-xl font-medium sm:text-lg text-base 
			${
				variant === "primary" &&
				"bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-shadow duration-300 "
			}
            ${
							variant === "secondary" &&
							"border border-stone-300 bg-transparent text-black hover:bg-accent hover:text-white transition-colors duration-300 "
						}
            ${className}
            `}
		>
			{children}
		</button>
	);
};

export default Button;

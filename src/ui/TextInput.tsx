const TextInput = ({
	placeholder,
	type,
	value,
	readOnly,
}: {
	placeholder?: string;
	type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
	value?: string;
	readOnly?: boolean;
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			readOnly={readOnly}
			className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-4 focus:ring-primary focus:border-transparent"
		/>
	);
};

export default TextInput;

const ComingSoon = ({ title }: { title: string }) => {
	return (
		<div className="text-center py-12">
			<h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
			<p className="text-gray-500 text-lg">This step is coming soon in the complete implementation</p>
		</div>
	);
};

export default ComingSoon;

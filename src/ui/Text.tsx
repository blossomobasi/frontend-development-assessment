import React from "react";

const Text = ({ children }: { children: React.ReactNode }) => {
	return <h2 className="md:text-3xl text-2xl font-bold text-center mb-5">{children}</h2>;
};

export default Text;

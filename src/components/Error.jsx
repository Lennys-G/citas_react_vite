const Error = ({ children }) => {
	return (
		<div className="bg-red-800 white text-white text-center rounded-md mb-3 uppercase font-bold p-3">
			{children}
		</div>
	);
};

export default Error;

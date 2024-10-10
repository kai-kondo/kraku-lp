const FeatureItem = ({ title, description }) => {
  return (
    <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
      <div className="mr-4">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <svg
            className="w-10 h-10 text-deep-purple-accent-400"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
      </div>
      <div>
        <h6 className="mb-3 text-xl font-bold leading-5">{title}</h6>
        <p className="mb-3 text-sm text-gray-900">{description}</p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

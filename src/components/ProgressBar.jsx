const ProgressBar = ({ percentage = 0 }) => {
  return (
    <div className="py-5 px-20">
      <h2 className="mb-5 text-xl font-bold">Our Progress</h2>
      <div className="w-full h-3 bg-gray-100">
        <div
          className="h-3 bg-blue-400 relative"
          style={{ width: percentage + "%" }}
        >
          <span className="absolute -bottom-6 right-0 translate-x-1/2 text-sm font-medium">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

const Banner = ({ companyName, companySlogan }) => {
  return (
    <div className="py-20 text-center bg-gray-300">
      <h1 className="text-3xl font-bold mb-5">{companyName}</h1>
      <p>{companySlogan}</p>
    </div>
  );
};

export default Banner;

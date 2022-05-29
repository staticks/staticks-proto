import { useNavigate } from "react-router-dom";

const List = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div className="py-5 px-20">
      <p className="text-sm text-gray-400 mb-5">total : {items?.length}</p>
      <ul className="flex flex-col gap-5">
        {items.map(({ title, date }, index) => (
          <li key={index} className="pb-3 border-b border-gray-300">
            <h3
              className="text-xl font-bold mb-1 hover:underline cursor-pointer"
              onClick={() => {
                navigate(`./index`);
              }}
            >
              {title}
            </h3>
            <p className="text-sm text-gray-400">{date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

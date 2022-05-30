import { useNavigate } from "react-router-dom";

const List = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div className="px-20 py-5">
      <p className="mb-5 text-sm text-gray-400">total : {items?.length}</p>
      <ul className="flex flex-col gap-5">
        {items.map(({ id, title, date }, index) => (
          <li key={index} className="pb-3 border-b border-gray-300">
            <h3
              className="mb-1 text-xl font-bold cursor-pointer hover:underline"
              onClick={() => {
                navigate(`./${id}`);
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

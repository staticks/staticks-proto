import { Link } from "react-router-dom";

const Menu = ({ logo, items }) => {
  return (
    <div className="flex items-center justify-between py-2 px-5">
      <Link to="/">
        <img className="w-10" src={logo} alt="logo" />
      </Link>

      <ul className="flex gap-4">
        {items &&
          items.map(({ path, title }) => (
            <li key={path}>
              <Link className="hover:underline" to={path}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;

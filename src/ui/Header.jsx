import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UseraName from "../features/user/UseraName";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-4 uppercase sm:px-10">
      <Link to="/" className="tracking-widest">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <UseraName />
    </header>
  );
};

export default Header;

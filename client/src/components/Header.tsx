import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tighter">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            className="flex items-center bg-white text-blue-600 px-3 font-bold hover:bg-gray-200"
            to="/sign-up"
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export { Header };

import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[10vw] py-2 max-sm:flex-col max-sm:gap-2">
      <Link to="/">
        <div className="text-2xl font-bold">
          <span className="text-red-500">ANIME</span>
          <span>VAULT</span>
        </div>
      </Link>
      <div className="flex gap-4 max-sm:hidden">
        <img
          src="https://64.media.tumblr.com/43199fb1499d04e30be31a766738e57d/16229e01644097d9-c8/s540x810/fb681827409d9ab276cfab854cdf7c9564a32b2b.gif"
          alt="poster"
          className="h-10 max-sm:h-5 rounded-full"
        />
        <img
          src="https://i.pinimg.com/originals/d3/b0/4e/d3b04eab1e692340264cfc7ca11c8a7d.gif"
          alt="poster"
          className="h-10 max-sm:h-5 rounded-full"
        />
        <img
          src="https://www.icegif.com/wp-content/uploads/naruto-icegif-42.gif"
          alt="poster"
          className="h-10 max-sm:h-5 rounded-full"
        />
        <img
          src="https://media0.giphy.com/media/3pTtbLJ7Jd0YM/giphy.gif"
          alt="poster"
          className="h-10 max-sm:h-5 rounded-full"
        />
      </div>
      {/* <div className="space-x-2">
        <input
          type="text"
          className="border-[1px] rounded-sm border-black active:outline-none text-xs p-2"
          placeholder="Search anime..."
        />
        <button className="text-xs text-white bg-red-500 p-2 rounded-sm hover:bg-red-600 active:bg-red-800">
          Search
        </button>
      </div> */}
    </div>
  );
};

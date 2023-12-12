import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const BaseURL = "https://shikimori.one";

export const AnimeList = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectValue, setSelectValue] = useState("");
  const [addIndex, setAddIndex] = useState(1);
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setLoading(true);
        const result = await axios.get(
          `${BaseURL}/api/animes?page=1&limit=10&order=popularity`
        );
        console.log(result.data);
        setAnime(result.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  const loadmore = async (no) => {
    try {
      setLoading(true);
      setPage(no);
      const result = await axios.get(
        `${BaseURL}/api/animes?page=${no}&limit=10&order=popularity`
      );
      console.log(result.data);
      setAnime(result.data);
      console.log(anime);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (e) => {
    const option = e.target.value;
    setSelectValue(option);
    switch (option) {
      case "option1":
        setAddIndex(1);
        break;
      case "option2":
        setAddIndex(101);
        break;
      case "option3":
        setAddIndex(201);
        break;
      case "option4":
        setAddIndex(301);
        break;
      case "option5":
        setAddIndex(401);
        break;
      case "option6":
        setAddIndex(501);
        break;
      case "option7":
        setAddIndex(601);
        break;
      case "option8":
        setAddIndex(701);
        break;
      case "option9":
        setAddIndex(801);
        break;
      case "option10":
        setAddIndex(901);
        break;
    }
  };

  return (
    <div>
      <div className="h-[70vh] flex justify-center items-center gap-[10vw] max-sm:hidden">
        <div className="flex flex-col gap-2">
          <p className="text-5xl font-bold">Explore The</p>
          <p className="text-5xl font-bold text-red-600">Diverse Realms</p>
          <p className="text-5xl font-bold">of Anime Magic</p>
        </div>
        <div>
          <img
            src="https://aniwatch.to/images/anw-min.webp"
            alt="poster"
            className="h-[60vh] max-sm:h-[20vh]"
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-[150px] max-sm:px-[75px] max-sm:pt-[20px]">
        <p className="text-2xl font-bold  max-sm:text-lg">Explore Anime</p>
        <p className="font-bold text-sm border-[1px] p-1 rounded-sm  max-sm:text-xs">
          Page: {page}
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center p-10 h-[90vh] max-sm:h-[80vh]">
          <img
            src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
            alt="loading"
            className="h-5"
          />
        </div>
      ) : (
        <div className="flex justify-center p-5 flex-wrap gap-5">
          {anime.map((item) => {
            return (
              <div className="h-[400px] w-[240px]">
                <Link to={`/anime/${item?.id}`}>
                  <img
                    className="h-[340px] w-[240px] rounded-lg hover:brightness-75 hover:cursor-pointer"
                    src={
                      item.name === "Death Note"
                        ? "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                        : `${BaseURL}/${item.image?.original}`
                    }
                    alt={item.name}
                  />
                </Link>
                <Link to={`/anime/${item?.id}`}>
                  <p className="text-sm font-bold hover:text-red-500 hover:cursor-pointer mt-1">
                    {item.name.length <= 25
                      ? item.name
                      : item.name.slice(0, 25) + "..."}
                  </p>
                </Link>
                <div className="space-x-2">
                  <span className="space-x-1">
                    <FaList size={10} color="red" className="inline" />
                    <span className="text-xs">{item.episodes}</span>
                  </span>
                  <span className="space-x-1">
                    <FaStar size={10} color="yellow" className="inline" />
                    <span className="text-xs">{item.score}</span>
                  </span>
                  <span className="text-xs">{item.kind.toUpperCase()}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!loading && (
        <div>
          <div className="flex justify-end pr-[12vw] pb-4 max-sm:pr-0 max-sm:justify-center">
            <select
              name="pagelist"
              id="list"
              className="text-black rounded-sm cursor-pointer"
              value={selectValue}
              onChange={(e) => handleSelect(e)}
            >
              <option value="option1">1-100</option>
              <option value="option2">101-200</option>
              <option value="option3">201-300</option>
              <option value="option4">301-400</option>
              <option value="option5">401-500</option>
              <option value="option6">501-600</option>
              <option value="option7">601-700</option>
              <option value="option8">701-800</option>
              <option value="option9">801-900</option>
              <option value="option10">901-1000</option>
            </select>
          </div>
          <div className="flex justify-center">
            <div className="flex w-[80vw] flex-wrap gap-2 pb-10">
              {[...Array(100)].map((_, index) => (
                <button
                  onClick={() => loadmore(index + addIndex)}
                  className="text-xs bg-red-500 p-2 w-10 h-10 rounded-sm hover:bg-red-600"
                >
                  {index + addIndex}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

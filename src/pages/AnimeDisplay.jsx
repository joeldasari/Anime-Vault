import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const BaseURL = "https://shikimori.one";
export const AnimeDisplay = () => {
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const [similar, setSimilar] = useState([]);
  const { animeID } = useParams();
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`${BaseURL}/api/animes/${animeID}`);
        const resultRoles = await axios.get(
          `${BaseURL}/api/animes/${animeID}/roles`
        );
        const resultSimilar = await axios.get(
          `${BaseURL}/api/animes/${animeID}/similar`
        );
        setAnime(result.data);
        setRoles(resultRoles.data);
        setSimilar(resultSimilar.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAnime();
  }, []);
  return (
    <div className="flex justify-center items-center py-5 ">
      {loading === false ? (
        <div className="w-[65vw] flex flex-col items-center gap-5 max-sm:w-[75vw] max-sm:flex-col max-sm:items-center">
          {/* poster  */}
          <div>
            <img
              className="h-[340px] w-[240px] rounded-lg"
              src={
                anime.name === "Death Note"
                  ? "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                  : `${BaseURL}/${anime.image?.original}`
              }
              alt="poster"
            />
          </div>
          <div className="space-y-1">
            <div>
              {/* title  */}
              <p className="text-2xl font-bold my-1 text-red-500">
                {anime.name}
              </p>
            </div>
            {/* english version  */}
            <div>
              <span className="font-bold">English Version: </span>
              <span>{anime?.english}</span>
            </div>
            {/* genres  */}
            <div>
              <span className="font-bold">Genres: </span>
              {anime.genres?.map((item, index) => {
                return (
                  <span>
                    {index + 1 < anime?.genres.length
                      ? item.name + ", "
                      : item.name + ""}
                  </span>
                );
              })}
            </div>
            <div>
              {/* released on  */}
              <span className="font-bold my-1">Released on: </span>
              <span>{anime.released_on}</span>
            </div>
            <div>
              {/* aired on  */}
              <span className="font-bold my-1">Aired on: </span>
              <span>{anime.aired_on}</span>
            </div>
            <div>
              {/* score */}
              <span className="font-bold my-1">Score: </span>
              <span>{anime.score}</span>
            </div>
            <div>
              {/* studios  */}
              <span className="font-bold my-1">Studios: </span>
              {anime.studios?.map((item) => {
                return <span>{item.name}</span>;
              })}
            </div>
            <div>
              {/* Episodes  */}
              <span className="font-bold my-1">Total Episodes: </span>
              <span>
                {anime.episodes ? anime.episodes : anime.episodes_aired}
              </span>
            </div>
            <div>
              {/* Episode Duration  */}
              <span className="font-bold my-1">Episode Duration: </span>
              <span>{anime.duration} min</span>
            </div>
            <div>
              {/* Episode Duration  */}
              <span className="font-bold my-1">Rating: </span>
              <span>{anime.rating?.toUpperCase()}</span>
            </div>
            {/* Characters  */}
            <p className="text-2xl font-bold text-center pb-4 text-red-500">
              Characters
            </p>
            <div className="flex flex-wrap gap-x-[50px]">
              {roles.map((item, index) => {
                return (
                  <div>
                    {index < 12 && (
                      <div className="h-[250px] w-[120px]">
                        <img
                          src={`${BaseURL}${item.character?.image?.original}`}
                          alt="image"
                          className=" rounded-lg h-[180px] w-[120px]"
                        />
                        <p className="text-xs font-bold mt-1">
                          {item.character?.name}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* similar  */}
            {similar.length > 0 && (
              <p className="text-2xl font-bold text-center pb-4 text-red-500">
                Similar Animes
              </p>
            )}
            <div className="flex flex-wrap gap-x-[50px]">
              {similar.map((item, index) => {
                return (
                  <div>
                    {index < 12 && (
                      <div className="h-[250px] w-[120px]">
                        <Link to={`/anime/${item?.id}`} target="_top">
                          <img
                            src={
                              item.name === "Death Note"
                                ? "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                                : `${BaseURL}/${item.image?.original}`
                            }
                            alt="image"
                            className=" rounded-lg h-[180px] w-[120px] hover:brightness-75 hover:cursor-pointer"
                          />
                        </Link>
                        <Link to={`/anime/${item?.id}`} target="_top">
                          <p className="text-xs font-bold mt-1 hover:text-red-500 hover:cursor-pointer">
                            {item.name.length <= 25
                              ? item.name
                              : item.name.slice(0, 25) + "..."}
                          </p>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
            alt="loading"
            className="h-5"
          />
        </div>
      )}
    </div>
  );
};

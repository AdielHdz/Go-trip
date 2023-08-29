import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
const CardPopularPlace = ({ urlImage }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const isFavoriteHandler = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div
      className="relative bg-cover bg-center rounded-lg h-[150px] shadow-little2 text-white p-3 font-poppins text-sm font-300 flex flex-col items-start justify-end "
      style={{
        backgroundImage: `linear-gradient(to top, rgba(85, 85, 85, 0.5), rgba(0, 0, 0, 0.1)),url(${urlImage})`,
      }}
    >
      <div className="w-8 h-8 flex items-center justify-center absolute right-3 top-3 bg-white pt-1 rounded-full focus:scale-110">
        {isFavorite ? (
          <BsHeartFill
            onClick={isFavoriteHandler}
            className="text-red-600 w-5 h-5"
          />
        ) : (
          <BsHeart
            onClick={isFavoriteHandler}
            className="text-neutral-600 w-5 h-5"
          />
        )}
      </div>

      <h3>Mexico, Ciudad de México</h3>
      <h3>Barceló</h3>
    </div>
  );
};

export default CardPopularPlace;

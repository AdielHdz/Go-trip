"use client";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Select from "../Select/Select";
/* import { getHotelsCoincidencesByCityId, cleanCoincedences, fetchingCity } from "../../redux/Features/Citys/CitySlice"; */
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = ({ toggleOpen, inputIsDisabled }) => {
  const dispatch = useDispatch();

  const searchParams = useSearchParams();
  const idCity = searchParams.get("city");

  /*  const cityData = useSelector((state) => state.city.city); */
  const [cityName, setCityName] = useState("");

  const router = useRouter();
  const handlerSearch = (e) => {
    const nameCity = e.target.value;
    setCityName(nameCity);
    if (nameCity) dispatch(fetchingCity(nameCity));
    if (!nameCity) dispatch(cleanCoincedences());
  };

  /* useEffect(() => {
    if (cityData.city)
      setCityName(
        `${cityData.city}${cityData.state ? `, ${cityData.state}` : ""}, ${
          cityData.country
        }`
      );
    console.log(cityData);
  }, [cityData]); */

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="City. Example: Ciudad de México"
        className={`w-full h-12 shadow-little_inset rounded-md border-2 border-neutral-700  shadow-input text-iconsPurple outline-purple_logo pl-3 mb-2 placeholder:font-300 trasnform transition-transform duration-300 focus:scale-y-110  dark:bg-neutral-900 dark:placeholder:text-orangeBg dark:shadow-inset_orange dark:text-white peer`}
        onChange={handlerSearch}
        /*  value={cityName} */
        disabled={false}
        spellCheck={false}
      />
      <button
        onClick={() => {
          router.push(`/resultsHotels?city=`);

          /*  dispatch(getHotelsCoincidencesByCityId(idCity)); */
        }}
        className="absolute top-1.5 flex items-center justify-center  w-9 h-9 rounded-full right-1 text-2xl text-iconsPurple dark:text-orangeBg transform transition-transform duration-300 peer-focus:scale-110 "
      >
        <BsSearch
          style={{ pointerEvents: "none" }}
          className=" text-xl text-rose drop-shadow-md"
        />
      </button>
      <Select toggleOpen={toggleOpen} />
    </div>
  );
};

export default SearchBar;

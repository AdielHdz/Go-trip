"use client";
import React, { useEffect, useState } from "react";
import { Bad_Script, Josefin_Sans, Roboto } from "next/font/google";
// import NavBarFooter from '@/components/navBarFooter/NavBarFooter';
// import SearchBar from '../components/SearchBar/SearchBar';
import SliderMain from "../components/SlidersImages/SliderMain";
import FiltersBar from "../components/Filters/FiltersBar";
import ContainerResults from "../components/ContainerResults/ContainersResults";
import PopularPlaces from "../components/Sliders/PopularPlaces";
/* import { selectCityState } from "../redux/Features/Citys/CitySlice"; */
import { useSelector, useDispatch } from "react-redux";
/* import {
  fetchingHotel,
  selectHotelState,
} from "../redux/Features/Hotel/hotelsSlice"; */
/* import { useLocalStorage } from "../hooks/useLocalStorage"; */
import { GiBackpack } from "react-icons/gi";
const josefin = Josefin_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

export const badScript = Bad_Script({
  weight: ["400"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
});

const Home = () => {
  const dispatch = useDispatch();
  /*   const cityResults = useSelector(selectCityState);
  const hotelResults = useSelector(selectHotelState); */

  const [tokenSession, setTokenSession] = useState("6664");
  const [userNameSession, setUserNameSession] = useState("Adiel Hernandez");

  /*  const storedUserNameSession = localStorage.getItem("username");  */

  /*   useEffect(() => {
    if (typeof window !== "undefined") {
      storedUserNameSession;
      setUserNameSession(
        storedUserNameSession ? JSON.parse(storedUserNameSession) : ""
      );
    }
  }, [typeof window !== "undefined" && storedUserNameSession]);

  useEffect(() => {
    dispatch(fetchingHotel(tokenSession));
  }, []); */

  return (
    <div className={`p-3 pb-2 bg-white dark:bg-neutral-900`}>
      <header className="">
        <h4
          className={` font-josefin  tracking-widest text-rose dark:text-blueSky`}
        >
          {userNameSession !== ""
            ? `Hello, ${userNameSession}!`
            : "Hello, User"}
        </h4>
        <h2
          className={`mt-3 font-concert font-500 text-neutral-700 text-xl dark:text-white tracking-widest uppercase`}
        >
          Where you Go?
        </h2>
        <FiltersBar />
      </header>

      <main>
        <PopularPlaces />
      </main>
      {/*  <main>
        <SliderMain roboto={roboto} />
      </main> */}

      <footer className=" bg-slate-600"></footer>
    </div>
  );
};

export default Home;

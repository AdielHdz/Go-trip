"use client";
import Logo_GoTrip from "./images/Go-Trip-logo.svg";
import Logo_GoTrip_Dark from "./images/Go-Trip-logo_Dark.svg";
import Image from "next/image";
import { useState } from "react";
import UserOptions from "../UserOptions/UserOptions";
/* import { useLocalStorage } from '../../hooks/useLocalStorage'; */
import { useRouter } from "next/navigation";
const NavBarTop = () => {
  /*   const [tokenSession, setTokenSession] = useLocalStorage("token", ""); //!MantenerCodigo */

  const router = useRouter();

  const handleReload = () => {
    router.push("/");
  };

  const [themeIsDark, setThemeIsDark] = useState(false);

  const setTheme = () => {
    if (!themeIsDark) {
      setThemeIsDark(true);
      document.body.classList.add("dark");
    } else {
      setThemeIsDark(false);
      document.body.classList.remove("dark");
    }
  };

  const [windowIsOpen, setWindow] = useState("hidden");

  const closeWindow = () => {
    if (windowIsOpen === "") {
      setWindow("hidden");
    } else {
      setWindow("");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" sticky z-30 left-0 shadow-input top-0 w-full h-16 shadow-lg flex justify-between items-center  px-3">
      <Image
        src={!themeIsDark ? Logo_GoTrip : Logo_GoTrip_Dark}
        alt="Logo_GoTrip"
        className="w-[125px]"
      />

      <button
        onClick={toggleOpen}
        className=" h-6 w-6 flex flex-col justify-evenly"
      >
        <div className="h-0 w-full border-b-2 border-b-solid border-b-iconsPurple"></div>
        <div className="h-0 w-full border-b-2 border-b-solid border-b-iconsPurple"></div>
        <div className="h-0 w-full border-b-2 border-b-solid border-b-iconsPurple"></div>
      </button>

      {/*   <UserOptions
        window={windowIsOpen}
        toggleOpen={toggleOpen}
        isOpen={isOpen}
      /> */}

      {/* <label htmlFor="check"  className=" shadow-inset_custom w-14 h-8 cursor-pointer rounded-full  relative dark:shadow-inset_BlueSky ">
                    <input type="checkbox" onChange={setTheme} id="check" className=" sr-only peer" />
                    <span className="w-6 h-6 top-1 left-1 bg-iconsPurple absolute rounded-full peer-checked:bg-orangeBg peer-checked:left-7 transition-all duration-300"></span>
                </label> */}
    </nav>
  );
};

export default NavBarTop;

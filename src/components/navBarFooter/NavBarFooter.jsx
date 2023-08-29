"use client";
import Link from "next/link";
import { BsCalendarCheck, BsHeart } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
/* import { useLocalStorage } from '../../hooks/useLocalStorage'; */
import { useEffect } from "react";
import { AiOutlineHome, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
const fStext = "text-sm";

const NavBarFooter = () => {
  /*   const [tokenSession, setTokenSession] = useLocalStorage("token", "");
  const [idSession, setIdSession] = useLocalStorage("idSession", "");
  const [rolSession, setRolSession] = useLocalStorage("rol", ""); */

  /*  useEffect(() => {
    if (typeof window !== "undefined") {
      const storeduserIdSession = localStorage.getItem("idSession");
      if (storeduserIdSession) {
        setIdSession(JSON.parse(storeduserIdSession));
      }
    }
  }, [localStorage.getItem("idSession")]); */

  /*   useEffect(() => {
    if (typeof window !== "undefined") {
      const storeduserTokenSession = localStorage.getItem("token");
      if (storeduserTokenSession) {
        setTokenSession(JSON.parse(storeduserTokenSession));
      }
    }
  }, [localStorage.getItem("token")]); */

  return (
    <nav className="grid grid-cols-4 gap-2 z-10 px-3  h-16 text-purple_logo bg-white shadow-little text-xs fixed left-0 bottom-0 w-full ">
      <Link href="/" className="flex flex-col items-center justify-center ">
        <IoHomeOutline className="text-3xl" />
      </Link>

      <Link
        href={`/myFavorites`}
        className=" flex flex-col items-center justify-center "
      >
        <FiHeart className=" text-3xl" />
      </Link>

      <Link
        href={`/myBookings`}
        className=" flex flex-col items-center justify-center "
      >
        <BsCalendarCheck className="text-2xl" />
      </Link>
      <Link
        href={`/userInfo/`}
        className=" flex flex-col items-center justify-center "
      >
        <BiUser className=" text-3xl" />
      </Link>
    </nav>
  );
};
export default NavBarFooter;

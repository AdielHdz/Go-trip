"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
const coverPhoto =
  "https://as2.ftcdn.net/v2/jpg/05/54/49/37/1000_F_554493763_8lh34fMzfBzUU50jSHzyHoM4qwpYrbmi.jpg";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { Asap, Josefin_Sans, Poppins } from "next/font/google";

const asapSemi = Asap({
  weight: ["600"],
  subsets: ["latin"],
});

const josefinRegular = Josefin_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

function beAHoteiler() {
  const [tokenSession, setTokenSession] = useLocalStorage("token", "");

  const [rolSession, setRolSession] = useLocalStorage("rol", "");

  return (
    <div className=" mt-20 bg-neutral-100 absolute inset-0 flex flex-col items-center justify-center px-10">
      {/* <Image src={coverPhoto} alt='cover' className='w-full'></Image>  ESTA QUEDA MEJOR PARA LE VERSIÓN WEB*/}
      <h1 className={`${asapSemi.className} text-2xl `}>Hoteiler title</h1>
      <p className="p-5 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa
        quasi consectetur deleniti cumque! Laudantium saepe fugit ad labore
        dolor! Debitis, atque nihil. Animi tempora culpa ex ducimus, laborum
        repellat?
      </p>

      <Link
        href={`/hotelReg`}
        type="button"
        className={`${josefinRegular.className} bg-[#7533ac] flex flex-row items-center justify-center text-white mt-10 h-10 mx-auto rounded-full w-2/3 `}
      >
        Register your hotel
      </Link>
    </div>
  );
}

export default beAHoteiler;

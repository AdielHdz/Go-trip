"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  selectOriginalHotelState,
  fetchingHotel,
} from "../../redux/Features/Hotel/hotelsSlice";
import { useEffect } from "react";
import CardHotelHoteiler from "../../components/CardHotelHoteiler/CardHotelHoteiler";
import { Appdispatch } from "@/redux/store";

const MyHotels = () => {
  const hotels = useSelector(selectOriginalHotelState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingHotel());
  }, [hotels.length]);

  return (
    <div className=" p-5 pb-24">
      <div className="grid grid-cols-1 gap-5">
        {hotels.map((hotel) => (
          <CardHotelHoteiler
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            image={hotel.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MyHotels;

"use client";
import axios from "axios";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchinHotelId } from "../../../redux/Features/Hotel/hotelsSlice";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TbHomeCancel } from "react-icons/tb";
import { AiFillBook } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import Link from "next/link";
import CommentPost from "@/components/ComentPost/CommentPost";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import StarRating from "@/components/StarRaiting/StarRaiting";
import {
  fetchinCommentByHotel,
  selectCommentsByHotelId,
} from "../../../redux/Features/Commets/CommentsSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { AnyAction } from "@reduxjs/toolkit";

const Detail = ({ params }) => {
  const [idSession, setIdSession] = useLocalStorage("idSession", "");
  const [tokenSession, setTokenSession] = useLocalStorage("token", "");

  const { id } = params;

  const idHotel = id;

  const handleCommentSubmit = async (comment) => {
    console.log(comment);
    try {
      const response = await axios.post("/comments", comment, {
        headers: {
          Authorization: `Bearer ${tokenSession}`,
        },
      });

      console.log(response.data);

      window.location.reload();
    } catch (error) {
      console.error("Rating error:", error);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchinHotelId(id));
    dispatch(fetchinCommentByHotel());
  }, []);

  const hotel = useSelector((state) => state.hotel.hotel);
  const comments = useSelector((state) => state.comment.comment);
  console.log(comments);

  const calif = Array.isArray(comments)
    ? comments.filter((comment) => comment.hotelId === id)
    : [];

  console.log(calif);

  const nums = [];
  calif.map((r) => nums.push(r.rating));

  const coms = [];
  calif.map((r) => coms.push(r.comment));

  const promedio = (num) => {
    const sum = num.reduce((acc, num) => acc + num, 0);
    const average = sum / num.length;
    const roundedValue = Math.round(average);
    return roundedValue;
  };

  const result = promedio(nums);

  const Room = ({ room }) => (
    <div className="bg-gray-300 border rounded-lg overflow-hidden mt-4">
      <div className="p-4">
        <h2 className="text-xl font-semibold">{room.room}</h2>
        <p className="text-gray-500">{room.description}</p>
        <p className="text-gray-500">Price: ${room.price}</p>
        <p className="text-gray-500">
          Available Rooms: {room.numRooms || "N/A"}
        </p>
        <div className="flex justify-center items-center mt-3">
          <Link
            href={{ pathname: `/reservation/${id}`, query: { room: room.id } }}
          >
            <span className="w-full mt-4 text-center bg-[#3F0071] hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Book here
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
  const Rooms = ({ rooms }) => (
    <div>
      <h2 className="flex justify-center text-2xl mt-3">
        {rooms?.length ? (
          <div className="flex items-center">
            <BsFillJournalBookmarkFill />
            <span className="pl-2">Book now</span>
          </div>
        ) : null}
      </h2>
      {rooms?.length ? (
        <div>
          {rooms.map((room, index) => (
            <Room key={index} room={room} />
          ))}
        </div>
      ) : (
        <NoRooms />
      )}
    </div>
  );

  const NoRooms = () => (
    <div className=" flex items-center justify-center text-xl mt-3">
      <TbHomeCancel />
      <p className="pl-2">No rooms available</p>
    </div>
  );

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col">
      <div className="bg-white shadow-lg  overflow-hidden">
        <img src={hotel.image} alt="Hotel" className="w-full" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{hotel.name}</h3>
          <h4 className="text-gray-500">
            {hotel.destination && hotel.destination.city}
          </h4>
          <p className="text-gray-500">
            {hotel.destination && hotel.destination.country}
          </p>
          <StarRating rating={result} />
          <div className="flex flex-col justify-start mt-4">
            <span className="text-gray-700 font-bold">
              Check-in <span className="pl-2">{hotel.checkIn}</span>
            </span>
            <span className="text-gray-700 font-bold">
              Check-out <span className="pl-2">{hotel.checkOut}</span>
            </span>
          </div>
        </div>
      </div>

      {hotel.rooms && hotel.rooms.length ? (
        <Rooms rooms={hotel.rooms} />
      ) : (
        <NoRooms />
      )}

      <div className="mt-6 px-5 pt-4 border shadow-lg">
        <h3 className="text-2xl font-bold mb-">About the hotel</h3>
        <p className="text-lg pb-4 text-gray-700 leading-relaxed ">
          {hotel.overview}
        </p>
      </div>

      {calif[0] && calif ? (
        <div className="h-50 z-10 pt-3 mt-5 border shadow-md">
          {calif &&
            calif?.map((comment) => {
              return (
                <div className="pb-5 px-5">
                  <div className="pb-3">
                    <div className="flex">
                      <h2 className="top-0 mb-3 text-iconsPurple text-lg">
                        {comment.user.name}
                      </h2>
                      <span className="mt-1 ml-2 text-sm">
                        -{comment.user.country}
                      </span>
                    </div>
                    <p>{comment.comment}</p>
                    <StarRating rating={comment.rating} />
                  </div>
                  <hr />
                </div>
              );
            })}
        </div>
      ) : (
        <h1 className="py-5">No comments...</h1>
      )}
      <div className="h-50 z-10 pt-3 mt-2 mb-28 border shadow-md">
        <CommentPost
          idHotel={idHotel}
          idUser={idSession}
          onSubmit={handleCommentSubmit}
        />
      </div>
    </div>
  );
};
export default Detail;

import React from "react";
import ProfileImg from "../Ellipse 1238.png";
import { Document } from "./icons";

export default function ProfileDiv() {
  return (
    <div className="profileDiv h-full w-[34%] flex flex-col items-center py-10 px-5">
      <img
        className="profileImg h-32 w-32 rounded-full object-cover object-center "
        src={ProfileImg}
        alt="Profile"
      />
      <h3 className="font-bold text-3xl mb-1">Diane Cooper</h3>
      <h6 className="text-gray-600">examplegmail@gmail.com</h6>

      <div className="w-[70%] flex justify-evenly my-3">
        <div className="past w-[50%] flex flex-col  items-center border-r-2">
          <div className="text-xl">15</div>{" "}
          <div className="text-sm text-gray-600">Past</div>
        </div>
        <div className="upcomming w-[50%] flex flex-col items-center">
          <div className="text-xl">02</div>{" "}
          <div className="text-sm text-gray-600">Upcoming</div>
        </div>
      </div>

      <button className="w-[70%] border-2 py-2 rounded-lg hover:bg-gray-100 my-6">
        Send Message
      </button>
      <div className="filesSection w-full pl-10 h-[45%]">
        <h1 className="mb-3 text-lg">Files / Documents </h1>
        <div className="h-[80%] overflow-y-scroll pr-2  w-[full]">
          <div className="bg-gray-100 w-fit rounded p-3 px-5 mb-2 flex">
            <Document />
            <span className="ml-2">Check Up Results.pdf</span>
            </div>
          <div className="bg-gray-100 w-fit rounded p-3 px-5 mb-2 flex">
            <Document />
            <span className="ml-2">Check Up Results.pdf</span>
          </div>
          <div className="bg-gray-100 w-fit rounded p-3 px-5 mb-2 flex">
            <Document />
            <span className="ml-2">Medical Prescription.pdf</span>
          </div>
          <div className="bg-gray-100 w-fit rounded p-3 px-5 mb-2 flex">
            <Document />
            <span className="ml-2">Dental X-Ray Result.pdf</span>
          </div>
        </div>
      </div>
    </div>
  );
}

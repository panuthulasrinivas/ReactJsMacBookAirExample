import React from 'react'
import { New, Patient, Folder, Upload, Report, Setting, Logout } from './icons'
import Logo from './Logo.svg'
export default function SideNav() {
    const itemStyle = "w-full h-full flex items-center justify-center item cursor-pointer flex-col gap-2 hover:bg-gray-100";
  return (
    <div className="sideNav h-full w-[6%] flex flex-col border-r-2 text-sm text-gray-400 ">
      <div
        className={`${itemStyle} bg-[#29B712] text-white hover:bg-[#29B712]`}
      >
        <img src={Logo} alt="" />
      </div>
      <div className={`${itemStyle}`}>
        <span className="text-black">
          <New />{" "}
        </span>
        Add
      </div>
      <div className={`${itemStyle}`}>
        <span className="text-black">
          <Patient />
        </span>{" "}
        Patient
      </div>
      <div className={`${itemStyle}`}>
        <span className="text-black">
          <Folder />
        </span>{" "}
        Folder
      </div>
      <div className={`${itemStyle}`}>
        <span className="text-black">
          <Upload />
        </span>
        Upload
      </div>
      <div className={`${itemStyle}`}>
        <span className="text-black">
          <Report />
        </span>
        Report
      </div>
      <div className={`${itemStyle}`}>
        <span className="text-black">
          <Setting />
        </span>
        Setting
      </div>
      <div className={`${itemStyle}`}>
        <span className="text-black">
          <Logout />
        </span>
        Logout
      </div>
    </div>
  );
}

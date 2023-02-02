import React from 'react'
import { Download } from './icons'

export default function TopPart() {
  return (
    <div className="flex flex-col w-full px-8 pt-12">
      <h1 className="font-bold text-3xl">View Report</h1>
      <div className="flex justify-between py-2">
        <span className="flex">
          <div className="mr-10">
            <span className="text-gray-600">Patient Name : </span>
            <span className="font-semibold">David Allen</span>
          </div>
          <div>
            <span className="text-gray-600">Date Uploaded : </span>
            <span className="font-semibold">04/28/2018 16:05:51</span>
          </div>
        </span>
        <button className="bg-[#29B712] text-white px-3 py-1 rounded hover:bg-green-600 mr-5 flex gap-2 items-center justify-center">
          <Download /> Download PDF
        </button>
      </div>
    </div>
  );
}

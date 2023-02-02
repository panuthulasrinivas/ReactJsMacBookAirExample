import InfoDiv from './components/InfoDiv';
import ProfileDiv from './components/ProfileDiv';
import { Refresh } from './components/icons';
import React, { useState } from 'react';
import ChartInfo from './components/ChartInfo'
import TopPart from './components/TopPart'
import FindPage from './components/FindPage';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import './index.css';
import img4 from "./images/e4.png";
import { New, Patient, Folder, Upload, Report, Setting, Logout } from './components/icons'
import Logo from './components/Logo.svg'

function App() {
  const [page, setPage] = useState(3);
  const [enabled, setEnabled] = useState(true);
  const options: ApexOptions = {
    chart: {
      height: 200,
      type: 'line',
      zoom: {
        enabled: true
      }
    },
  };

  const series = [
    {
      name: "All Tasks",
      data: [31, -4, 28, 51, 42, 109, 100, 31, -4, 28, 51, 42, 109, 22, 77, -4, 28, 51, 42, 109, 100, 31, -4, 28, 51, 66, 109, 100, 31, -4, 55, 51, 42, 109, 100, 31, -4, 28, 51, 33, 109, 100, 31, -4, 28, 51, 42, 109, 100, 31, -4, 28, 51, 42, 109, 100]
    }
  ];

  const SideNav=() => {
    const itemStyle = "w-full h-full flex items-center justify-center item cursor-pointer flex-col gap-2 hover:bg-gray-100";
  return (
    <div className="sideNav h-full w-[6%] flex flex-col border-r-2 text-sm text-gray-400 ">
      <div
        className={`${itemStyle} bg-[#29B712] text-white hover:bg-[#29B712]`}
      >
        <img src={Logo} alt="" />
      </div>
      <div className={`${itemStyle}`} onClick= {() => setPage(1)}>
        <span className="text-black">
          <New />{" "}
        </span>
        Add
      </div>
      <div className={`${itemStyle}`} onClick= {() => setPage(2)}>
        <span className="text-black">
          <Patient />
        </span>{" "}
        Patient
      </div>
      <div className={`${itemStyle}`} onClick= {() => setPage(3)}>
        <span className="text-black">
          <Folder />
        </span>{" "}
        Folder
      </div>
      <div className={`${itemStyle}`} onClick= {() => setPage(4)}>
        <span className="text-black">
          <Upload />
        </span>
        Upload
      </div>
      <div className={`${itemStyle}`} onClick= {() => setPage(2)}>
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


  const displayPage = () => {
    if (page === 1) {
      return (<div className="h-[100vh] w-[100vw] flex">
        {SideNav()}
        <ProfileDiv />
        <InfoDiv />
      </div>);
    } else if (page === 2) {
      return (<div className="h-[100vh] w-[100vw] flex">
        {SideNav()}
        <div className='w-full'>
          <TopPart />
          <div className='border-2 h-[25%] my-4 mx-8'><ReactApexChart options={options} series={series} type="line" height={250} /></div>
          <div className='flex mx-3 my-2'>
            <div className="legend flex gap-2 items-center mx-3 "><div className='w-3 h-3 bg-violet-600 rounded-full'> </div><span>P WAVE</span></div>
            <div className="legend flex gap-2 items-center mx-3 "><div className='w-3 h-1 bg-blue-600 '> </div><span>ST</span></div>
            <div className="legend flex gap-2 items-center mx-3 "><div className='w-3 h-3 bg-red-600 rounded-full'> </div><span>T WAVE</span></div>
            <div className="legend flex gap-2 items-center mx-3 "><div className='w-3 h-3 bg-green-600 rounded-full'> </div><span>FEATURES</span></div>
            <div className="legend flex gap-2 items-center mx-3 "><div className='w-3 h-3 bg-yellow-600 rounded-full'> </div><span>MORPHOLOGY</span></div>
          </div>
          <ChartInfo />
        </div>
      </div>);
    } else if (page === 3) {
      return (<div className="h-[100vh] w-[100vw] flex">
        {SideNav()}
        <div className="w-full">
          <TopPart />
          <div className="border-2 h-[35%] my-4 mx-8"><ReactApexChart options={options} series={series} type="line" height={400} /></div>
          <hr />
          <br />
          <br />
          <div className="flex w-full px-8 pt-10">
            <div className="w-1/3 flex items- gap-5 border-r-2">
              <div className="">
                <h2 className="text-3xl font-bold pl-6">LTMK3729373</h2>
                <div className="flex items-center  py-3">
                  <div className="w-1/2 border-r-2 flex flex-col items-center justify-center gap-2">
                    <span>Refresh</span>
                    <Refresh />
                  </div>
                  <div className="w-1/2 flex flex-col items-center justify-center gap-2">
                    <span>Connected</span>
                    <div className="flex">
                      <label class="inline-flex relative items-center mr-5 cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={enabled}
                          readOnly
                        />
                        <div
                          onClick={() => {
                            setEnabled(!enabled);
                          }}
                          className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                        ></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div style={{ backgroundImage: `url("images/e1.png")` }}> <img src={img4} /></div>
              
            </div>
            <div className="w-1/3 flex flex-col px-12 border-r-2">
              <h3 className="font-bold text-3xl mb-1">Diane Cooper</h3>
              <h6 className="text-gray-600">examplegmail@gmail.com</h6>

              <div className="w-[65%] flex justify-evenly my-3">
                <div className="past w-[50%] flex flex-col  items-center border-r-2">
                  <div className="text-xl">15</div>{" "}
                  <div className="text-sm text-gray-600">Past</div>
                </div>
                <div className="upcomming w-[50%] flex flex-col items-center">
                  <div className="text-xl">02</div>{" "}
                  <div className="text-sm text-gray-600">Upcoming</div>
                </div>
              </div>
            </div>
            <div className="w-1/3 pl-8">
              <h2 className="text-xl font-bold">LEGENDS</h2>
              <div className=" flex flex-col gap-2 text-gray-600 pt-3">
                <div className="w-full flex gap-2 items-center ">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  PVC - Premature Ventricular Contractions
                </div>
                <div className="w-full flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-violet-400"></div>
                  PAC - Premature Atrial Contractions
                </div>
                <div className="w-full flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-rose-800"></div>
                  Second Degree - Second Degree Type-1/Type-2
                </div>
                <div className="w-full flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  NB - Noise on Beat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
    } else {
      return (<div className="h-[100vh] w-[100vw] flex">
        {SideNav()}
        <FindPage />
      </div>);
    }
  }


  return (
    <>
      {displayPage()}
    </>
  );
}

export default App;

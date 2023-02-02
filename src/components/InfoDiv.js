import React from 'react'
import { Note } from './icons';

export default function InfoDiv() {
    return (
      <div className='w-[80%] pt-20 pr-16'>
        <div className=' flex flex-wrap justify-between gap-2'>
            <div className='border-b-2 w-1/5 mb-5'>
                <div className='text-gray-500 text-sm mb-1'>Gender</div>
                <div className='mb-3'>Female</div>
            </div>
            <div className='border-b-2 w-1/5 mb-5'>
                <div className='text-gray-500 text-sm mb-1'>Birthday</div>
                <div className='mb-3'>Feb 24th,1997</div>
            </div>
            <div className='border-b-2 w-1/5 mb-5'>
                <div className='text-gray-500 text-sm mb-1'>Phone Number</div>
                <div className='mb-3'>(239) 555 -0108</div>
            </div>
            <div className='border-b-2 w-1/5 mb-5'>
                <div className='text-gray-500 text-sm mb-1'>Registered Date</div>
                <div className='mb-3'>Feb 24th, 1997</div>
            </div>
            <div className='border-b-2 w-1/5 mb-5'>
                <div className='text-gray-500 text-sm mb-1'>Street Address</div>
                <div className='mb-3'>JL.Diponeogoro</div>
            </div>
            <div className='border-b-2 w-1/5 mb-5'>
                <div className='text-gray-500 text-sm mb-1'>City</div>
                <div className='mb-3'>Cilacap</div>
            </div>
            <div className='border-b-2 w-1/5 mb-5'>
                <div className='text-gray-500 text-sm mb-1'>Zip Code</div>
                <div className='mb-3'>655849</div>
            </div>
            <div className='border-b-2 w-1/5 mb-5'>
                <div className='text-gray-500 text-sm mb-1'>Member Status</div>
                <div className='mb-3'>Active Number</div>
            </div>
        </div>
        <div className='mt-12'>
            <div className='bg-gray-100  w-fit p-1 rounded flex gap-1'>
                <span className='cursor-pointer hover:bg-white rounded px-4 py-1 bg-white text-blue-600'>Upcoming Appointments</span>
                <span className='cursor-pointer hover:bg-white rounded px-4 py-1'>Past Appointments</span>
                <span className='cursor-pointer hover:bg-white rounded px-4 py-1'>Medical Records</span>
            </div>
            <div className='bg-gray-100  mt-5 rounded-lg'>
                    <div className='flex justify-between px-10 py-5  border-black'><span>Root Canal Treatment</span> <button className='bg-white rounded px-2 py-1 text-gray-500 hover:text-black' >Show Previous Treatments</button></div>
                    <div className='border-b-2 border-gray-300 mb-2' ></div>
                    <div className='w-full py-3 px-6'>
                        <div className='bg-white p-5 flex items-center mb-2'>
                            <div className='flex flex-col w-1/4 border-r-2 justify-center items-center'><span className='text-2xl font-bold'>26 Nov '19</span><span className='text-xs'>09.00 - 10.00</span></div>
                            <div className='flex flex-col w-1/4 border-r-2 justify-center items-center'><span className='text-gray-600 text-sm'>Treatment</span><span>Open Access</span></div>
                            <div className='flex w-1/2 justify-evenly'>
                            <div className='flex flex-col justify-center items-center' ><span className='text-gray-600 text-sm'>Dentist</span><span>Drg. Adam H.</span></div>
                            <div className='flex flex-col justify-center items-center'><span className='text-gray-600 text-sm'>Nurse</span><span>Jassicamila</span></div>
                                <button className='text-blue-600 flex items-center gap-1'><Note /> Note</button>
                            </div>
                        </div>
                        <div className='bg-white p-5 flex items-center mb-2'>
                            <div className='flex flex-col w-1/4 border-r-2 justify-center items-center'><span className='text-2xl font-bold'>12 Nov '19</span><span className='text-xs'>09.00 - 10.00</span></div>
                            <div className='flex flex-col w-1/4 border-r-2 justify-center items-center'><span className='text-gray-600 text-sm'>Treatment</span><span>Root Canal</span></div>
                            <div className='flex w-1/2 justify-evenly'>
                            <div className='flex flex-col justify-center items-center' ><span className='text-gray-600 text-sm'>Dentist</span><span>Drg. Adam H.</span></div>
                            <div className='flex flex-col justify-center items-center'><span className='text-gray-600 text-sm'>Nurse</span><span>Jassicamila</span></div>
                                <button className='text-blue-600 flex items-center gap-1'><Note /> Note</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
      </div>
    );
}

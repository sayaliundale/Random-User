import React from 'react';
import female1 from "./female1.png";

const Comp = (props) => {
    const { info } = props;

    return (
        <>
            <div className="grid justify-items-center h-screen bg-slate-100">

                <div className="w-1/4 h-2/3 p-3 bg-white mt-20 rounded-md shadow-slate-400 drop-shadow-xl ">

                    <div className="w-full h-full border border-blue ">

                        <img className="w-3/6 ml-24 mt-6 drop-shadow-2xl" src={female1} alt="female-img" />
                        <p className="text-center font-medium text-3xl "> {info?.name?.first} {info?.name?.last}</p>

                            <div className='w-full h-2/3 pl-16 pt-8 text-lg leading-8'>

                            <p><span className=' font-medium   '>Gender : </span> {info?.gender}</p>
                            <p><span className=' font-medium  '>Phone Number : </span>{info?.phone} </p>
                            <p><span className=' font-medium  '>DOB : </span>{info?.dob?.date && new Date(info.dob.date).toLocaleDateString()} </p>
                            <p><span className=' font-medium  '>Email : </span>{info?.email} </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Comp;

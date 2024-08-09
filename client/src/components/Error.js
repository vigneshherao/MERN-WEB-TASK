import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { Error_MSG, Home } from '../utils/constants';

const Error = () => {

    const err = useRouteError();

    return (
        <div className='bg-custom-dark-blue w-full h-screen flex flex-col items-center justify-center p-6 sm:p-10'>
            <div className="text-6xl mb-4">😞</div>
            <h1 className="text-2xl font-bold text-white mb-4">{Error_MSG}</h1>
            {err && (
                <div className="bg-gray-200 p-4 rounded-md text-center shadow-md">
                    <p className="text-lg text-red-600 mb-2">Error: {err.statusText || err.message}</p>
                    <p className="text-sm text-gray-700">{err.status} - {err.data}</p>
                </div>
            )}
            <button className='bg-white w-[10%] mt-10 p-2 font-bold  hover:bg-black text-orange-500'><Link to={"/"}>{Home}</Link></button>
        </div>
    )
}

export default Error

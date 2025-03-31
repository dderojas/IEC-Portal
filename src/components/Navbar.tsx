import React from "react" // do not need this, get rid of later
import { useView } from "../context/ViewContext"

export const Navbar = () => {
    const { setView } = useView()

    return (
    <nav className='flex justify-around w-full'>
        <button className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md" onClick={() => setView('home')}>Home</button>
        <button className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md" onClick={() => setView('perDiemForm')}>Per Diem</button>
        <button className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md" onClick={() => setView('travelExpenseForm')}>Travel Claim</button>
        <button className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md">PDF Docs</button>
      </nav>
    )
}
import React from "react";

export default function Sidebar(){
    return(
        <div className="fixed left-2 top-28 w-44 rounded-3xl" style={{backgroundColor:"#212738",height:'70vh'}}>
            <ul className="text-white flex flex-col items-center justify-evenly h-full">
                <li className="cursor-pointer hover:text-slate-500">Profile</li>
                <li className="cursor-pointer hover:text-slate-500">Browse Players</li>
                <li className="cursor-pointer hover:text-slate-500">Academy</li>
                <li className="cursor-pointer hover:text-slate-500">About</li>
                <li className="cursor-pointer hover:text-slate-500">Contact</li>
            </ul>
        </div>
    )
}
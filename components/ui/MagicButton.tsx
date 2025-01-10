import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
} : {
    title: string; handleClick?: () => void; otherClasses?: string;
}) => {
    return (
        <button className="p-[3px] relative w-full mt-10 hover:-translate-y-1 transform transition duration-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
            <div className={`px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200
            text-white hover:bg-transparent ${otherClasses}`}>
                {title}
            </div>
        </button>
    )
}

export default MagicButton
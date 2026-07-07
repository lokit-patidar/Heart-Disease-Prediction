import React from 'react'

export default function Header() {
    return (
        <div className="flex flex-col justify-center items-center text-white w-full min-h-screen px-5 py-16 bg-gradient-to-r from-[#111b35] to-[#162d59]">
            <h1 className='flex items-center gap-2 text-white text-bold text-2xl'><span className='flex text-[#50a2ff] items-center p-4.5 bg-[#172f5e] text-xl border-1 border-blue-500 rounded-2xl'><i className="fa-solid fa-heart-pulse"></i></span> CardioNet AI</h1>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                Heart Disease Prediction Model
            </h1>
            <p className="max-w-3xl text-center text-sm sm:text-base md:text-lg leading-7">
                Enter patient clinical features to assess the statistical risk of cardiovascular disease using our advanced machine learning classifier.
            </p>
            <br />
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
                <span><i className="fa-solid text-[#50a2ff] fa-stethoscope"></i> Clinical Grade</span>
                <span><i className="fa-regular text-[#50a2ff] fa-file-lines"></i> Evidence Based</span>
            </div>

        </div>
    )
}

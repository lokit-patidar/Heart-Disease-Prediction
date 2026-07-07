import React from 'react'

export default function PredictionDanger({ probability }) {
    return (
        <div className='flex flex-col sm:flex-row gap-6 bg-[#fef7f8] p-5 sm:p-8 md:p-10'>
            <div className="flex justify-start sm:block">
                <span className='bg-[#ffe2e2] flex text-2xl p-4 rounded-full'>
                    <i className="text-[#e7000b] py-[2px] fa-solid fa-circle-exclamation"></i>
                </span>
            </div>

            <div className='flex flex-col gap-3 w-full'>

                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3'>
                    <h2 className='text-[#82181a] text-lg md:text-xl lg:text-2xl font-bold'>
                        High Risk Detected
                    </h2>

                    <div className='w-full sm:w-auto text-center bg-[#ffe2e2] text-[#c3080f] font-bold px-4 py-2 rounded-full border border-[#fecaca]'>
                        Probability: {(probability * 100).toFixed(2)}%
                    </div>
                </div>

                <p className='text-[#c3080f]'>
                    Based on the provided clinical parameters, the model suggests a higher probability of heart disease.
                    It is strongly recommended that this patient consult a cardiologist for further evaluation.
                </p>

                <div className='text-[#62748e] text-sm font-medium uppercase'>
                    Disclaimer: This is a demonstrative prediction and should not be used for actual medical diagnosis.
                </div>

            </div>
        </div>
    )
}
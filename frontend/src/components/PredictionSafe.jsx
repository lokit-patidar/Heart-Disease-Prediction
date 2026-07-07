import React from 'react'

export default function PredictionSafe({ probability }) {
    return (
        <div className='flex flex-col sm:flex-row gap-6 bg-[#f5fcf9] p-5 sm:p-8 md:p-10'>
            <div className="flex justify-start sm:block">
                <span className='bg-[#d0fae5] flex text-3xl p-4 rounded-full'>
                    <i className="text-[#009966] py-[2px] fa-regular fa-circle-check"></i>
                </span>
            </div>

            <div className='flex flex-col gap-3 w-full'>

                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3'>
                    <h2 className='text-[#004f3b] text-lg md:text-xl lg:text-2xl font-bold'>
                        Low Risk Assessed
                    </h2>

                    <div className='w-full sm:w-auto text-center bg-[#d0fae5] text-[#009966] font-bold px-4 py-2 rounded-full border border-[#86efac]'>
                        Probability: {(probability * 100).toFixed(2)}%
                    </div>
                </div>

                <p className='text-[#1d8969]'>
                    Based on the provided clinical parameters, the model suggests a lower probability of heart disease. Maintaining a healthy lifestyle and regular medical check-ups is still recommended.
                </p>

                <div className='text-[#62748e] text-sm font-medium uppercase'>
                    Disclaimer: This is a demonstrative prediction and should not be used for actual medical diagnosis.
                </div>

            </div>
        </div>
    )
}
import React, { useState } from 'react'
import PredictionDanger from './PredictionDanger'
import PredictionSafe from './PredictionSafe'
export default function Card() {
    const [click, setClick] = useState(false)
    const [prediction, setPrediction] = useState(null);
    const [formData, setFormData] = useState({
        Age: 45,
        Sex: "M",
        ChestPainType: "ATA",
        RestingBP: 130,
        Cholesterol: 250,
        FastingBS: 0,
        RestingECG: "Normal",
        MaxHR: 170,
        ExerciseAngina: "N",
        Oldpeak: 0,
        ST_Slope: "Up"
    })

    async function sendReq() {
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        console.log(formData)
        const result = await response.json();
        return result
    }
    return (
        <div className={`bg-white shadow-lg ${click ? "pb-0" : "pb-8"} flex flex-col gap-4 relative -top-[70px] z-1 max-w-8/10 border-1 border-white mx-auto rounded-3xl overflow-hidden`}>
            <div className='flex bg-[#0f172b] h-25 w-full flex flex-col gap-3 items-center justify-center'>
                <div className='text-lg text-bold text-white px-2'>Patient Parameters</div>
                <div className='text-sm text-[#8e9fb8] px-2'>Enter the clinical features to assess risk.</div>
            </div>
            <div className='flex flex-col gap-5 w-9/10 mx-auto bg-[#fefeff] text-sm'>
                <form action="" className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-2'>
                    <div className='flex flex-col gap-1'>
                        <label >Age</label>
                        <input className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg' type="text" placeholder='e.g.45' value={formData.Age} onChange={(e) =>
                            setFormData({
                                ...formData,
                                Age: e.target.value
                            })
                        } />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label >Sex</label>
                        <select value={formData.Sex}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    Sex: e.target.value
                                })
                            } className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg'>
                            <option value="M">Male (M)</option>
                            <option value="F">Female (F)</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label >Chest Pain Type</label>
                        <select value={formData.ChestPainType}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    ChestPainType: e.target.value
                                })
                            } className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg'>
                            <option value="ATA">Atypical Angina (ATA)</option>
                            <option value="TA">Typical Angina (TA)</option>
                            <option value="NAP">Non-Angina Pain (NAP)</option>
                            <option value="ASY">Asymptomatic (ASY)</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label >Resting BP (mm Hg)</label>
                        <input className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg' type="text" placeholder='e.g.130' value={formData.RestingBP} onChange={(e) =>
                            setFormData({
                                ...formData,
                                RestingBP: e.target.value
                            })
                        } />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label >Cholesterol (mm/dl)</label>
                        <input className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg' type="text" placeholder='e.g.250' value={formData.Cholesterol} onChange={(e) =>
                            setFormData({
                                ...formData,
                                Cholesterol: e.target.value
                            })
                        } />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label >Fasting Blood Sugar</label>
                        <select value={formData.FastingBS}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    FastingBS: e.target.value
                                })
                            } className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg'>
                            <option value="0">≤ 120 mg/dl (0)</option>
                            <option value="1">&gt; 120 mg/dl (1)</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label >Resting ECG</label>
                        <select value={formData.RestingECG}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    RestingECG: e.target.value
                                })
                            } className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg'>
                            <option value="Normal">Normal</option>
                            <option value="ST">ST-T wave abnormality (ST)</option>
                            <option value="LVH">Left ventricular hypertrophy (LVH)</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label >Max Heart Rate</label>
                        <input className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg' type="text" placeholder='e.g.170' value={formData.MaxHR} onChange={(e) =>
                            setFormData({
                                ...formData,
                                MaxHR: e.target.value
                            })
                        } />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label >Exercise Angina</label>
                        <select value={formData.ExerciseAngina}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    ExerciseAngina: e.target.value
                                })
                            } className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg'>
                            <option value="N">No (N)</option>
                            <option value="Y">Yes (Y)</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label >Old Peak</label>
                        <input className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg' type="text" placeholder='e.g.0' value={formData.Oldpeak} onChange={(e) =>
                            setFormData({
                                ...formData,
                                Oldpeak: e.target.value === ""
                                    ? ""
                                    : parseFloat(e.target.value)
                            })
                        } />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label >ST Slope</label>
                        <select value={formData.ST_Slope}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    ST_Slope: e.target.value
                                })
                            } className='bg-[#f8fafc] p-2 border-1 border-[#e2e8f0] rounded-lg'>
                            <option value="Up">Upsloping (UP)</option>
                            <option value="Flat">Flat</option>
                            <option value="Down">Downsloping (Down)</option>
                        </select>
                    </div>
                </form>
                <div className='flex justify-end sm:justify-center md:justify-end lg:justify-end '>
                    <button type="button" onClick={async () => {
                        const result = await sendReq();
                        setPrediction(result);
                    }} className='bg-[#155dfc] p-3 px-7 rounded-xl text-white text-bold hover:bg-[#1447e6] cursor-pointer'>Run Prediction &gt;</button>
                </div>
            </div>
            {prediction && (prediction.probability >= 0.5 ?  <PredictionDanger probability={prediction.probability}/> : <PredictionSafe probability={prediction.probability} />)}
        </div>
    )
}

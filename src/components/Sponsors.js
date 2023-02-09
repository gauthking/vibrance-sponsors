import React, { useState } from 'react'
import frame7 from "../assets/frame7.png"
import external from "../assets/external.svg"
import Vector1 from "../assets/Vector-1.svg"
import Vector from "../assets/Vector.svg"
import Navbar from './Navbar'
import logosp from "../assets/logosponsor.png"
import "./Sponsors.css"
function Sponsors() {
    const [hover, setHover] = useState(false);
    console.log(hover)
    return (
        <div className='sponsorsMain'>
            <Navbar />
            <div className='sponsorsMain__imageFrame mt-12 flex justify-center'>
                <img className='w-11/12 md:w-4/5' src={frame7} alt="frame" />
            </div>

            <div className="sponsorsMain__sponsors m-6 lg:m-12 flex flex-col gap-6">
                <p className='text-xl lg:text-4xl md:ml-32'>Title Sponsor</p>
                <div className="sponsorsBox flex">
                    <div className="sponsorsMain__sponsors__card flex flex-col gap-6 p-6 mx-16 m-6 hover:bg-[#FFEEB6] transition-all ease-in-out w-fit rounded-lg">
                        <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='w-64' src={logosp} alt="" />
                        <p>Sponsor Name</p>
                        <div id='socials' className={hover ? ` sponsorsMain__sponsors__card__socials flex gap-3 delay-150` : `sponsorsMain__sponsors__card__socials hidden`}>
                            <div>
                                <img className='w-5' src={Vector1} alt="" />
                            </div>
                            <div >
                                <img className='w-5' src={external} alt="" />
                            </div>
                            <div >
                                <img className='w-5' src={Vector} alt="" />
                            </div>
                        </div>
                    </div >

                </div>

            </div >

        </div >
    )
}

export default Sponsors
import React from 'react'
import frame7 from "../assets/frame7.png"
import ext from "../assets/ext.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import Navbar from './Navbar'
import logosp from "../assets/logosponsor.png"
import "./Sponsors.css"
function Sponsors() {
    return (
        <div className='sponsorsMain'>
            <Navbar />
            <div className='sponsorsMain__imageFrame mt-12 flex justify-center'>
                <img className='w-11/12 md:w-4/5' src={frame7} alt="frame" />
            </div>

            <div className="sponsorsMain__sponsors m-6 lg:m-12 flex flex-col gap-6">
                <p className='text-xl lg:text-4xl md:ml-32'>Title Sponsor</p>
                <div className="sponsorsBox flex">
                    <div className="sponsorsMain__sponsors__card flex flex-col gap-6 p-6 mx-16 m-6 hover:bg-[#FFEEB6] w-fit rounded-lg">
                        <img className='w-64' src={logosp} alt="" />
                        <p>Sponsor Name</p>
                        <div className="sponsorsMain__sponsors__card__socials flex gap-3">
                            <div>
                                <img className='w-5' src={insta} alt="" />
                            </div>
                            <div >
                                <img className='w-5' src={ext} alt="" />
                            </div>
                            <div >
                                <img className='w-5' src={twitter} alt="" />
                            </div>
                        </div>
                    </div >

                </div>

            </div >

        </div >
    )
}

export default Sponsors
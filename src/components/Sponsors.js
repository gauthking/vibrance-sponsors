import React, { useEffect, useState } from 'react'
import frame7 from "../assets/frame7.png"
import external from "../assets/external.svg"
import Vector1 from "../assets/Vector-1.svg"
import Vector from "../assets/Vector.svg"
import Navbar from './Navbar'
import logosp from "../assets/logosponsor.png"
import "./Sponsors.css"
import axios from "../axios"
function Sponsors() {
    // const [hover, setHover] = useState(false);
    const [data, setData] = useState([]);
    // console.log(hover)

    useEffect(() => {
        async function fetchSponsors() {
            const req = await axios.get("/sponsors")
            setData(req.data.sponsors);
        }
        fetchSponsors();
    }, [])
    console.log(data)
    return (
        <div className='sponsorsMain'>
            <Navbar />
            <div className='sponsorsMain__imageFrame mt-12 flex justify-center'>
                <img className='w-11/12 md:w-4/5' src={frame7} alt="frame" />
            </div>

            <div className="sponsorsMain__sponsors m-6 lg:m-12 flex flex-col">
                <p className='text-xl lg:text-4xl md:ml-32'>Title Sponsor</p>
                <div className="sponsorsBox grid grid-cols-1 md:grid-cols-3 m-auto gap-16 mt-12">
                    {data.map((item) => (
                        <div className="sponsorsMain__sponsors__card flex flex-col gap-6 p-6 h-[400px] hover:bg-[#FFEEB6] transition-all ease-in-out w-fit rounded-lg">
                            <img className='w-64' src={logosp} alt="" />
                            <p>{item.title}</p>
                            <div id='socials' className="sponsorsMain__sponsors__card__socials hidden gap-3 delay-100">
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
                    ))}

                </div>

            </div >

        </div >
    )
}

export default Sponsors
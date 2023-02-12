import React, { useEffect, useState } from 'react'
import frame7 from "../assets/frame7.png"
import external from "../assets/external.svg"
import Vector1 from "../assets/Vector-1.svg"
import Vector from "../assets/Vector.svg"
import Navbar from './Navbar'
import logosp from "../assets/logosponsor.png"
import "./Sponsors.css"
import axios from "../axios"
import { motion } from "framer-motion"
// import InfiniteScroll from "react-infinite-scroll-component";

function Sponsors() {
    // const [hover, setHover] = useState(false);
    const [data, setData] = useState([]);
    // console.log(hover)
    async function fetchSponsors() {
        const req = await axios.get("/sponsors")
        setData(req.data.sponsors);
    }
    useEffect(() => {

        fetchSponsors();
    }, [])
    console.log(data)
    return (
        <div className='sponsorsMain'>
            <Navbar />
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='sponsorsMain__imageFrame mt-12 flex justify-center'>
                <img className='w-11/12 md:w-3/4' src={frame7} alt="frame" />
            </motion.div>

            <div className="sponsorsMain__sponsors m-6 lg:m-12 flex flex-col gap-4">
                <p className='text-xl lg:text-4xl md:ml-32'>Title</p>
                <motion.div className="sponsorsBox grid grid-cols-1 md:grid-cols-3 m-auto gap-16 mt-12">
                    {data.filter(ob => ob.type === "TITLE").map((item) => (
                        <div className="sponsorsMain__sponsors__card flex flex-col gap-6 p-6 h-[400px] hover:bg-[#FFEEB6] transition-all ease-in-out w-fit rounded-lg">
                            <img className='w-64' src={logosp} alt="Image not available" />
                            <p>{item.title}</p>
                            <div id='socials' className="sponsorsMain__sponsors__card__socials hidden gap-3 delay-100">
                                <div className='cursor-pointer'>
                                    <img className='w-5' src={Vector1} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={external} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={Vector} alt="" />
                                </div>
                            </div>
                        </div >
                    ))}

                </motion.div>
                <p className='text-xl lg:text-4xl md:ml-32'>Food Partner</p>
                <motion.div className="sponsorsBox grid grid-cols-1 md:grid-cols-3 m-auto gap-16 mt-12">
                    {data.filter(ob => ob.type === "FOOD_PARTNER").map((item) => (
                        <div className="sponsorsMain__sponsors__card flex flex-col gap-6 p-6 h-[400px] hover:bg-[#FFEEB6] transition-all ease-in-out w-fit rounded-lg">
                            <img className='w-64' src={logosp} alt="Image not available" />
                            <p>{item.title}</p>
                            <div id='socials' className="sponsorsMain__sponsors__card__socials hidden gap-3 delay-100">
                                <div className='cursor-pointer'>
                                    <img className='w-5' src={Vector1} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={external} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={Vector} alt="" />
                                </div>
                            </div>
                        </div >
                    ))}

                </motion.div>
                <p className='text-xl lg:text-4xl md:ml-32'>Media Partner</p>
                <motion.div className="sponsorsBox grid grid-cols-1 md:grid-cols-3 m-auto gap-16 mt-12">
                    {data.filter(ob => ob.type === "MEDIA_PARTNER").map((item) => (
                        <div className="sponsorsMain__sponsors__card flex flex-col gap-6 p-6 h-[400px] hover:bg-[#FFEEB6] transition-all ease-in-out w-fit rounded-lg">
                            <img className='w-64' src={logosp} alt="Image not available" />
                            <p>{item.title}</p>
                            <div id='socials' className="sponsorsMain__sponsors__card__socials hidden gap-3 delay-100">
                                <div className='cursor-pointer'>
                                    <img className='w-5' src={Vector1} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={external} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={Vector} alt="" />
                                </div>
                            </div>
                        </div >
                    ))}

                </motion.div>
                <p className='text-xl lg:text-4xl md:ml-32'>Banking Partner</p>
                <motion.div className="sponsorsBox grid grid-cols-1 md:grid-cols-3 m-auto gap-16 mt-12">
                    {data.filter(ob => ob.type === "BANKING_PARTNER").map((item) => (
                        <div className="sponsorsMain__sponsors__card flex flex-col gap-6 p-6 h-[400px] hover:bg-[#FFEEB6] transition-all ease-in-out w-fit rounded-lg">
                            <img className='w-64' src={logosp} alt="Image not available" />
                            <p>{item.title}</p>
                            <div id='socials' className="sponsorsMain__sponsors__card__socials hidden gap-3 delay-100">
                                <div className='cursor-pointer'>
                                    <img className='w-5' src={Vector1} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={external} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={Vector} alt="" />
                                </div>
                            </div>
                        </div >
                    ))}

                </motion.div>
                <p className='text-xl lg:text-4xl md:ml-32'>Merchandise Partner</p>
                <motion.div className="sponsorsBox grid grid-cols-1 md:grid-cols-3 m-auto gap-16 mt-12">
                    {data.filter(ob => ob.type === "MERCHANDISE_PARTNER").map((item) => (
                        <div className="sponsorsMain__sponsors__card flex flex-col gap-6 p-6 h-[400px] hover:bg-[#FFEEB6] transition-all ease-in-out w-fit rounded-lg">
                            <img className='w-64' src={logosp} alt="Image not available" />
                            <p>{item.title}</p>
                            <div id='socials' className="sponsorsMain__sponsors__card__socials hidden gap-3 delay-100">
                                <div className='cursor-pointer'>
                                    <img className='w-5' src={Vector1} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={external} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={Vector} alt="" />
                                </div>
                            </div>
                        </div >
                    ))}

                </motion.div>
                <p className='text-xl lg:text-4xl md:ml-32'>Other</p>
                <motion.div className="sponsorsBox grid grid-cols-1 md:grid-cols-3 m-auto gap-16 mt-12">
                    {data.filter(ob => ob.type === "OTHER").map((item) => (
                        <div className="sponsorsMain__sponsors__card flex flex-col gap-6 p-6 h-[400px] hover:bg-[#FFEEB6] transition-all ease-in-out w-fit rounded-lg">
                            <img className='w-64' src={logosp} alt="Image not available" />
                            <p>{item.title}</p>
                            <div id='socials' className="sponsorsMain__sponsors__card__socials hidden gap-3 delay-100">
                                <div className='cursor-pointer'>
                                    <img className='w-5' src={Vector1} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={external} alt="" />
                                </div>
                                <div className='cursor-pointer' >
                                    <img className='w-5' src={Vector} alt="" />
                                </div>
                            </div>
                        </div >
                    ))}

                </motion.div>

            </div >

        </div >
    )
}

export default Sponsors
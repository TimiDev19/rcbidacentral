import { Link } from "react-router-dom"
import transparentLogo from '../assets/plain-rotary.svg'
import { FadeInFromTop } from "../components/FadeInFromTop"
import { FadeInFromLeft } from "../components/FadeInFromLeft"
import '@fontsource/lato/400.css';  // Normal weight
import '@fontsource/lato/700.css';  // Bold weight
import { FadeInFromRight } from "../components/FadeInFromRight";
import { FadeInFromBottom } from "../components/FadeInFromBottom";

const About = () => {
    return (
        <div className=" w-[100vw] overflow-hidden">
            <div className=" px-2 w-full h-[90vh] bg-[#17458f] text-white flex flex-col items-center justify-center text-center">
                <FadeInFromTop>
                    <div className=" h-full w-full flex flex-col items-center justify-center">
                        <h1 className=" uppercase font-bold text-4xl md:text-5xl tracking-[0.1em] urbanist">About Rotary club of bida central</h1>
                        <p className=" md:w-[45%] mb-4 urbanist">The club was chartered in 2004 and sits in Bida, an ancient town in the heart of Niger state, Nigeria. Every member of rotary club Bida is fully committed to helping people and we treat eachother as a family not just a club.</p>
                        <p className=" urbanist">We meet <span className=" text-amber-500">every Tuesday at 18:30</span> in person at <span className=" text-amber-500">Taste Palace Hotel</span></p>
                        <Link to='' className=" urbanist mt-4 text-white p-2 border-white border-2 duration-500 hover:bg-white hover:text-black">Participate</Link>
                    </div>
                </FadeInFromTop>
            </div>
            <div className=" h-fit py-3 flex items-center justify-start">
                <FadeInFromLeft>
                    <div className=" w-full h-full flex items-center justify-start">
                        <div className=" h-[80%] w-[95%] lg:w-[90%] border-b border-[#17458f] flex items-end justify-end">
                            <p className=" h-full w-[85%] lg:w-[50%] xl:w-[30%] italic lora text-2xl text-[#17458f]">
                                The Rotary Club of Bida Central is a vibrant community of leaders and
                                changemakers dedicated to creating a lasting impact in Bida and beyond.
                                Through service, compassion, and collaboration, we work to uplift the
                                underprivileged, empower youth, and champion initiatives in health,
                                education, and economic development.
                            </p>
                        </div>
                    </div>
                </FadeInFromLeft>
            </div>
            <div className=" bg-[#17458f] px-2 py-4">
                <h1 className=" text-amber-500 text-center text-3xl font-bold urbanist tracking-[0.05em]">A SMALL INSIGHT TO THE WORLD OF ROTARY</h1>

                <div className='flex align-top flex-col md:flex-row justify-between items-start w-full my-11'>
                    <div className='bg-transparent w-full md:w-5/12 rounded-2xl text-left mb-4 h-[250px]'>
                        <FadeInFromLeft>
                            <div className=" w-full h-full bg-white p-8 rounded-2xl urbanist">
                                <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1 flex items-start flex-col justify-start'><img src={transparentLogo} className='w-1/4 mr-3' />Vision statement</h1>
                                <p className='text-blue-900 text-lg font-semibold'>
                                    Together we see a world where people unite and take action to create lasting change - across the globe, in our communities, and in ourselves.
                                </p>
                            </div>
                        </FadeInFromLeft>
                    </div>


                    <div className='bg-transparent w-full md:w-5/12 rounded-2xl text-left h-[250px]'>
                        <FadeInFromRight>
                            <div className=" w-full h-full bg-white p-8 rounded-2xl urbanist">
                                <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1 flex flex-col items-start justify-start'><img src={transparentLogo} className='w-1/4 mr-3' />core values</h1>
                                <p className='text-blue-900 text-lg font-semibold'>
                                    Our core values are Service, Fellowship, Leadership, Integrity, Diversity
                                </p>
                            </div>
                        </FadeInFromRight>
                    </div>
                </div>

                <div className='bg-transparent w-full md:w-3/5 m-auto rounded-2xl text-left'>
                    <FadeInFromBottom>
                        <div className=" h-full w-full bg-white p-8 rounded-2xl urbanist">
                            <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1'>object of rotary</h1>
                            <p className='text-blue-900 mb-5 text-lg font-semibold'>
                                The Object of Rotary is to encourage and foster the ideal of service as a basis of worthy enterprise and, in particular, to encourage and foster:
                            </p>
                            <p className='font-semibold text-amber-500'><span className='text-blue-900 uppercase'>First: </span>The development of acquaintance as an opportunity for service</p>
                            <p className='font-semibold text-amber-500'><span className='text-blue-900 uppercase'>Second: </span>High ethical standards in business and professions; the recognition of the worthiness of all useful occupations; and the dignifying of each Rotarian’s occupation as an opportunity to serve society</p>
                            <p className='font-semibold text-amber-500'><span className='text-blue-900 uppercase'>Third: </span>The application of the ideal of service in each Rotarian’s personal, business, and community life</p>
                            <p className='font-semibold text-amber-500'><span className='text-blue-900 uppercase'>Fourth: </span>The advancement of international understanding, goodwill, and peace through a world fellowship of business and professional persons united in the ideal of service.</p>
                        </div>
                    </FadeInFromBottom>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center w-full my-11'>


                    <div className='bg-transparent w-full md:w-2/5 rounded-2xl text-left mb-4'>
                        <FadeInFromLeft>
                            <div className=" bg-white w-full h-full p-8 rounded-2xl urbanist">
                                <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1'>The four way test</h1>
                                <p className='text-blue-900 mb-5 text-lg font-semibold'>
                                    The Four-Way Test is a nonpartisan and nonsectarian ethical guide for Rotarians to use for their personal and professional relationships. The test has been translated into more than 100 languages, and Rotarians recite it at club meetings:
                                    Of the things we think, say or do
                                </p>
                                <p className='font-semibold text-amber-500'>Is it the TRUTH?</p>
                                <p className='font-semibold text-amber-500'>Is it FAIR to all concerned?</p>
                                <p className='font-semibold text-amber-500'>Will it build GOODWILL and BETTER FRIENDSHIPS?</p>
                                <p className='font-semibold text-amber-500'>Will it be BENEFICIAL to all concerned?</p>
                            </div>
                        </FadeInFromLeft>
                    </div>

                    <div className='bg-transparent w-full md:w-2/5 rounded-2xl text-left'>
                        <FadeInFromRight>
                            <div className=" bg-white w-full h-full p-8 rounded-2xl urbanist">
                                <h1 className='text-amber-500 font-bold uppercase text-2xl mb-1'>Areas Of Focus</h1>
                                <p className='text-blue-900 mb-5 text-lg font-semibold'>We direct our efforts to enhance our local and global impact. Our most successful and sustainable projects and activities tend to fall within the following areas:</p>
                                <p className='font-semibold text-amber-500'>Promoting peace</p>
                                <p className='font-semibold text-amber-500'>Fighting Disease</p>
                                <p className='font-semibold text-amber-500'>Providing clean water</p>
                                <p className='font-semibold text-amber-500'>Saving mothers and children</p>
                                <p className='font-semibold text-amber-500'>Basic Education and Literacy</p>
                                <p className='font-semibold text-amber-500'>Growing local economies</p>
                                <p className='font-semibold text-amber-500'>Protecting the environment</p>
                            </div>
                        </FadeInFromRight>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About

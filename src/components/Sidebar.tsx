import { useState } from 'react'
import Logo from '../assets/Club  Logo png for digital and transparent background.png'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';
import { FadeInFromTop } from './FadeInFromTop';
import { motion } from "framer-motion";

const Sidebar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='fixed z-50'>
            <FadeInFromTop>
                <div className=" bg-white flex items-center w-full h-[100px] px-4">
                    <div className=" w-full flex items-center justify-between">
                        <img src={Logo} alt="" className=' w-[40%] md:w-[20%]' />
                        {/* <div className=' md:hidden'>
                            {
                                dropdownOpen ? (<button onClick={() => setDropdownOpen(!dropdownOpen)} className=' text-[#17458f]'><CloseOutlinedIcon /></button>) : (<button onClick={() => setDropdownOpen(!dropdownOpen)} className=' text-[#17458f]'><MenuOutlinedIcon /></button>)
                            }
                        </div> */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 ">
                                <Link to='/' className='text-amber-500 duration-500 text-sm hover:text-base'>Home</Link>
                                <Link to='/about' className='text-amber-500 duration-500 text-sm hover:text-base'>About</Link>
                                <Link className='text-amber-500 duration-500 text-sm hover:text-base' to='/newsletter'>Newsletter & Events</Link>
                                <Link to='/contact' className='text-amber-500 duration-500 text-sm hover:text-base'>Contact</Link>
                                <Link to={''} className='text-amber-500 duration-500 text-sm hover:text-base'>Showcase</Link>
                                <Link to="/participate" className="text-blue-900 font-semibold text-sm px-8 py-2 mx-2 bg-blue-200 hover:bg-amber-500 duration-500 rounded-3xl">Participate</Link>
                            </div>
                        </div>

                    </div>

                    <div className=' lg:hidden'>
                        {/* Button to toggle the sidebar */}
                        <button
                            onClick={toggleSidebar}
                            style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                        >
                            {isOpen ? <CloseOutlinedIcon className='text-5xl text-[#17458f]' /> : <MenuOutlinedIcon className=' height-[400px] text-5xl text-[#17458f]' />}
                        </button>

                        {/* Sidebar motion component */}
                        <motion.div
                            initial={{ width: 0 }} // Initial width of sidebar when closed
                            animate={{ width: isOpen ? 300 : 0 }} // Animate to width 300px when open
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                duration: 0.5,
                            }} // Smooth transition
                            style={{
                                height: "100vh",
                                backgroundColor: "#fff",
                                color: "black",
                                overflow: "hidden",
                                position: "fixed",
                                top: 0,
                                left: 0,
                            }}
                            className=' shadow-md shadow-black'
                        >
                            {/* Sidebar content */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isOpen ? 1 : 0 }}
                                transition={{ delay: 0.2 }}
                                style={{ padding: "20px" }}
                            >
                                <div className=' flex w-full items-center justify-between mb-8'>
                                    <h3 className=' text-lg uppercase '>rcbida</h3>
                                    <button
                                        onClick={toggleSidebar}
                                        style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                                    >
                                        {isOpen ? <CloseOutlinedIcon className='text-5xl text-[#17458f]' /> : " "}
                                    </button>
                                </div>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <Link to='/' className='text-amber-500 block  duration-500 text-xl mb-4 hover:tracking-[0.1em]'>Home</Link>
                                    <Link to='/about' className='text-amber-500 block  duration-500 text-xl mb-4 hover:tracking-[0.1em]'>About</Link>
                                    <Link className='text-amber-500 block  duration-500 text-xl mb-4 hover:tracking-[0.1em]' to='/newsletter'>Newsletter & Events</Link>
                                    <Link to='/contact' className='text-amber-500 block  duration-500 text-xl mb-4 hover:tracking-[0.1em]'>Contact</Link>
                                    <Link to={''} className='text-amber-500 duration-500 block  text-xl mb-4 hover:tracking-[0.1em]'>Showcase</Link>
                                    <Link to="/participate" className='text-amber-500 duration-500 block  text-xl mb-4 hover:tracking-[0.1em]'>Participate</Link>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
                {
                    dropdownOpen && <div className=' bg-white px-5 text-left'>
                        <ul>
                            <li className=' mb-4'><Link to='/' className=' mt-6 text-amber-500 hover:text-blue-900 duration-200'>Home</Link></li>
                            <li className=' mb-4'><Link to='/about' className=' mt-6 text-amber-500 hover:text-blue-900 duration-200'>About</Link></li>
                            <li className=' mb-4'><Link className=' mt-6 text-amber-500 hover:text-blue-900 duration-200' to='/newsletter'>Newsletter & Events</Link></li>
                            <li className=' mb-4'><Link to='/contact' className=' mt-6 text-amber-500 hover:text-blue-900 duration-200'>Contact</Link></li>
                            <li className=' mb-4'><Link to={''} className=' mt-6 text-amber-500 hover:text-blue-900 duration-200'>Showcase</Link></li>
                            <li className=' mb-4'><Link to="/participate" className=' mt-6 text-amber-500 hover:text-blue-900 duration-200'>Participate</Link></li>
                        </ul>
                    </div>
                }





            </FadeInFromTop>
        </div>
    )
}

export default Sidebar

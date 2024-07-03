import { useState } from 'react'
import Logo from '../assets/Club  Logo png for digital and transparent background.png'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    return (
        <div className='fixed'>
            <div className=" bg-white flex items-center w-full h-[100px] px-4">
                <div className=" w-full flex items-center justify-between">
                    <img src={Logo} alt="" className=' w-[40%] md:w-[20%]' />
                    <div className=' md:hidden'>
                        {
                            dropdownOpen ? (<button onClick={() => setDropdownOpen(!dropdownOpen)} className=' text-[#17458f]'><CloseOutlinedIcon /></button>) : (<button onClick={() => setDropdownOpen(!dropdownOpen)} className=' text-[#17458f]'><MenuOutlinedIcon /></button>)
                        }
                    </div>
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
        </div>
    )
}

export default Sidebar

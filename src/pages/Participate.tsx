import { Link } from 'react-router-dom'

const Participate = () => {
    return (
        <div className=' pt-[120px]'>
            <h1 className='text-blue-900 font-bold text-4xl uppercase py-20'>Participate in your own way</h1>
            <div className='bgJoin px-3 mt-4 my-20 mx-10 flex flex-col rounded-xl justify-center items-center'>
                <h1 className='text-white text-3xl md:text-4xl uppercase font-semibold'>Join the club?</h1>
                <p className='md:w-1/2 text-white font-thin'>If you feel interested in a project and don't want to join the club or participate physically, a spnsorship for funding is also a very good way to help the society. Remember Rotary is about helping others...</p>
                <Link to={''} className='text-white px-5 py-2 border-white border-2 border-solid hover:text-black hover:bg-white duration-500 justify-start w-fit mt-3'>Participate</Link>
            </div>

            <div className='bgSponsor px-3 mt-4 flex flex-col justify-center items-center'>
                <h1 className='text-white text-3xl md:text-4xl uppercase font-semibold'>Participate as a sponsor?</h1>
                <p className='md:w-1/2 text-white font-thin'>If you feel interested in a project and don't want to join the club or participate physically, a spnsorship for funding is also a very good way to help the society. Remember Rotary is about helping others...</p>
                <Link to={''} className='text-white px-5 py-2 border-white border-2 border-solid hover:text-black hover:bg-white duration-500 justify-start w-fit mt-3'>Participate</Link>
            </div>

            <div className='bgVolunteer px-3 mt-4 my-20 mx-10 flex flex-col rounded-xl justify-center items-center'>
                <h1 className='text-white text-4xl uppercase font-semibold'>Participate as a volunteer?</h1>
                <p className='md:w-1/2 text-white font-thin'>If you feel interested in a project and don't want to join the club or participate physically, a spnsorship for funding is also a very good way to help the society. Remember Rotary is about helping others...</p>
                <Link to={''} className='text-white px-5 py-2 border-white border-2 border-solid hover:text-black hover:bg-white duration-500 justify-start w-fit mt-3'>Participate</Link>
            </div>


            <div className='bgDonate px-3 mt-4 flex flex-col justify-center items-center'>
                <h1 className='text-white text-3xl md:text-4xl uppercase font-semibold'>Participate with a donation?</h1>
                <p className='md:w-1/2 text-white font-thin'>If you feel interested in a project and don't want to join the club or participate physically, a spnsorship for funding is also a very good way to help the society. Remember Rotary is about helping others...</p>
                <Link to={''} className=' text-white px-5 py-2 border-white border-2 border-solid hover:text-black hover:bg-white duration-500 justify-start w-fit mt-3'>Participate</Link>
            </div>
        </div>
    )
}

export default Participate

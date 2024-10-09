import news from "../helpers/NewsletterList"

const Newsletter = () => {

    return (
        <div className=" pt-[120px] px-2">
            <h1 className='mt-9 text-3xl font-bold text-left text-blue-900 urbanist'>Monthly Newsletter</h1>
            <div className='h-1 w-[35%] md:w-1/12 bg-amber-500 mt-1 mb-5'></div>
            <div className="w-[100%] overflow-x-scroll flex flex-row items-start justify-start urbanist">
                {
                    news.newsletters.map((news, index) => (
                        <div key={index} className="min-w-[300px] h-[400px] mr-5 bg-[#17458f] rounded-xl p-5">
                            <h1 className=" text-amber-500 font-bold text-xl"> {news.month}</h1>
                            <p className=" text-white">{news.news}</p>
                        </div>
                    ))
                }
            </div>

            <h1 className='mt-9 text-3xl font-bold text-left text-blue-900 tracking-[0.05em] urbanist'>FROM THE DESK OF THE CLUB PRESIDENT</h1>
            <div className='h-1 w-[35%] md:w-1/12 bg-amber-500 mt-1 mb-5'></div>
            <p className=" text-[#17458f] urbanist">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h1 className='mt-9 text-3xl font-bold text-left text-blue-900 urbanist'>Monthly Events</h1>
            <div className='h-1 w-[35%] md:w-1/12 bg-amber-500 mt-1 mb-5'></div>
            <div className="w-[100%] overflow-x-scroll flex flex-row items-start justify-start urbanist">
                {
                    news.newsletters.map((news, index) => (
                        <div key={index} className="min-w-[300px] h-[400px] mr-5 bg-[#17458f] rounded-xl p-5">
                            <h1 className=" text-amber-500 font-bold text-xl"> {news.month}</h1>
                            <p className=" text-white">{news.news}</p>
                        </div>
                    ))
                }
            </div>


            <h1 className='mt-9 text-3xl font-bold text-left text-blue-900 tracking-[0.05em] urbanist'>FROM THE DESK OF THE DISTRICT GOVERNOR</h1>
            <div className='h-1 w-[35%] md:w-1/12 bg-amber-500 mt-1 mb-5'></div>
            <p className=" text-[#17458f] urbanist mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

        </div>
    )
}

export default Newsletter

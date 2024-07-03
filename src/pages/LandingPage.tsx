import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
      <div className=" bgHome h-[75vh] pt-[100px] flex items-center justify-center md:h-[100vh]">
        <div className=" text-center">
          <h1 className=" text-white font-thin text-3xl md:text-5xl">Welcome To</h1>
          <h1 className=" text-white font-semibold text-4xl md:text-6xl">ROTARY CLUB OF BIDA CENTRAL</h1>
          <div className=" flex items-center justify-center flex-col sm:flex-row">
            <a href="" className=" text-white font-semibold px-4 py-2 bg-[#f7a81b] mb-4 rounded-lg hover:text-[#17458f] hover:bg-[#00a2e0] duration-500 mx-4">Projects</a>
            <a href="" className=" text-white font-semibold px-4 py-2 bg-[#f7a81b] mb-4 rounded-lg hover:text-[#17458f] hover:bg-[#00a2e0] duration-500 mx-4">Participate</a>
          </div>
        </div>

      </div>


      <div className=" h-[50vh] md:w-[75vw] m-auto flex items-center justify-center p-5">
        <div className="bgAbout h-full w-full rounded-lg flex items-center justify-center text-center px-2">
          <div>
            <h1 className=" text-white text-3xl md:text-5xl font-semibold">LEARN MORE ABOUT ROTARY</h1>
            <p className=" text-white mb-4">Take a good look at some basic things about Rotary</p>
            <Link to='' className=" text-white p-2 border-white border-2 duration-500 hover:bg-white hover:text-black">About Us</Link>
          </div>
        </div>
      </div>


      <div className=" bgCatalogue h-[50vh] flex items-center md:justify-end justify-center px-4">
        <div className=" md:w-[50%]">
          <h1 className=" text-white font-semibold text-3xl md:text-5xl">Our Showcase</h1>
          <p className=" text-white mb-4">View a showcase of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects View a catalogue of prestigeous projects</p>
          <Link to='' className=" text-white p-2 border-white border-2 duration-500 hover:bg-white hover:text-black">Showcase</Link>
        </div>
      </div>

      <div className=" flex items-center flex-col md:flex-row md:justify-between">
        <div className=" flex items-center justify-center text-center md:w-[45%]">
          <h1 className=" md:text-5xl text-3xl font-bold text-[#17458f] border-b-4 border-[#f7a81b] pb-2 mb-4">Rotary is for everyone!</h1>
        </div>
        <div className=" bg-[#00a2e0] md:h-[50vh] w-full md:w-[45%] text-left p-4 md:flex flex-col items-start justify-center">
          <h1 className=" text-3xl mb-4 ">Join Or Participate</h1>
          <p className=" text-lg mb-4">You can join as a member of the club but you can also chose to participate in projects without being a member. Rotary is for everyone so click the link below to sign up.</p>
          <Link to='' className=" text-black p-2 border-black border-2 duration-500 hover:bg-black hover:text-white">Showcase</Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

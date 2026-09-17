import { Link } from 'react-router-dom'
import amusphere from '../assets/amusphere.png'
import droid from '../assets/droid.png'
import laptop from '../assets/laptop.png'
import sunglasses from '../assets/sunglasses.png'

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 px-6 md:px-8 py-16 md:py-40">
        <img
          className="w-full max-w-[25rem] md:max-w-none md:w-[50rem] h-auto"
          src={amusphere}
          alt="Amusphere"
        />
        <div className="flex flex-col items-center gap-8 text-justify p-0 md:px-8 md:py-4">
          <h1 className="font-montserrat font-semibold tracking-[0.75rem]">AMUSPHERE</h1>
          <p className="font-inter font-normal">
            Discover the ultimate frontier of digital escapism with the Amusphere, our
            flagship neural interface. Meticulously engineered for the absolute pinnacle
            of full-dive sensory immersion, this masterpiece of technology transcends
            traditional virtual reality. By flawlessly integrating with your neural
            pathways, it transports you into breathtakingly vivid digital dimensions with
            perfect fidelity and absolute physical comfort. Crafted for those who demand
            uncompromising luxury and boundless exploration, the Amusphere elegantly
            dissolves the boundary between the physical world and the extraordinary.
          </p>
          <a
            href="#"
            className="inline-block bg-transparent text-navy border border-navy px-4 py-5 font-inter font-semibold text-sm tracking-[0.25rem] rounded-2xl no-underline cursor-pointer transition-all duration-300 hover:bg-navy hover:text-cloud"
          >
            EXPLORE THE COLLECTION
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="font-montserrat font-semibold tracking-[0.25rem]">HIGHLIGHTS</h2>
        <ul className="list-none flex flex-col md:flex-row items-center justify-between gap-12 md:gap-40 px-4 md:px-8 py-4">
          <li className="flex flex-col items-center justify-center font-inter font-normal text-justify gap-4">
            <img className="w-full max-w-[20rem] md:max-w-none md:w-[25rem] h-auto" src={droid} alt="Personal Ace Droid" />
            <p>
              A flawlessly designed, intuitive spherical assistant engineered to anticipate
              your every personal need with seamless elegance.
            </p>
            <Link
              to="/droid"
              className="inline-block bg-transparent text-navy border border-navy p-4 font-inter font-semibold text-sm tracking-[0.25rem] rounded-2xl no-underline cursor-pointer transition-all duration-300 hover:bg-navy hover:text-cloud"
            >
              SEE MORE
            </Link>
          </li>

          <li className="flex flex-col items-center justify-center font-inter font-normal text-justify gap-4">
            <img className="w-full max-w-[20rem] md:max-w-none md:w-[25rem] h-auto" src={laptop} alt="AceBook" />
            <p>
              Powered by the exclusive AceOS, this computing masterpiece features a tactile
              magnetic keyboard, unmatched trackpad precision, and a breathtaking MicroLED
              display.
            </p>
            <Link
              to="/laptop"
              className="inline-block bg-transparent text-navy border border-navy p-4 font-inter font-semibold text-sm tracking-[0.25rem] rounded-2xl no-underline cursor-pointer transition-all duration-300 hover:bg-navy hover:text-cloud"
            >
              SEE MORE
            </Link>
          </li>

          <li className="flex flex-col items-center justify-center font-inter font-normal text-justify gap-4">
            <img className="w-full max-w-[20rem] md:max-w-none md:w-[25rem] h-auto" src={sunglasses} alt="Ace Glasses" />
            <p>
              State-of-the-art augmented reality frames offering seamless environmental
              projection, real-time omni-translation, and intuitive environmental
              recognition.
            </p>
            <Link
              to="/sunglasses"
              className="inline-block bg-transparent text-navy border border-navy p-4 font-inter font-semibold text-sm tracking-[0.25rem] rounded-2xl no-underline cursor-pointer transition-all duration-300 hover:bg-navy hover:text-cloud"
            >
              SEE MORE
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home

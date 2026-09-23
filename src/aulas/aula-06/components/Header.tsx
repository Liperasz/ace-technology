import { Link } from 'react-router-dom'
import logo from '../assets/logo-transparent.png'

// Header idêntico ao original, apenas com Link no lugar de <a href>
function Header() {
  return (
    <header>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-8 py-4 border-b border-ink">
        <nav className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto gap-4 md:gap-6 pt-4 md:pt-0 font-inter font-normal">
          <a href="#" className="no-underline hover:underline">NEW DEVICES</a>
          <a href="#" className="no-underline hover:underline">COLLECTIONS</a>
          <a href="#" className="no-underline hover:underline">BESPOKE</a>
        </nav>

        <Link to="/aula-06">
          <img className="w-40 md:w-60 h-auto" src={logo} alt="Ace Group Technology" />
        </Link>

        <nav className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto gap-4 md:gap-6 pt-4 md:pt-0 font-inter font-normal">
          <input
            type="search"
            placeholder="SEARCH"
            className="w-full md:w-40 focus:w-full md:focus:w-80 py-2 text-xs tracking-[0.08em] bg-transparent border-0 border-b border-ink outline-none transition-all duration-300 focus:border-navy"
          />
          <a href="#" className="no-underline hover:underline">SHOPPING BAG</a>
          <Link to="/aula-06/profile" className="no-underline hover:underline">PROFILE</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

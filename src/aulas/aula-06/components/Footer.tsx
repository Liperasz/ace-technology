import { Link } from 'react-router-dom'
import logo from '../assets/logo-transparent.png'

// Footer idêntico ao original, com as 4 colunas (marca, grupo, atendimento, legal)
function Footer() {
  return (
    <footer className="bg-ink">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12 md:gap-20 px-6 md:px-8 py-12 md:py-20">
        <div className="flex flex-col items-center justify-center text-justify">
          <img className="w-40 h-auto" src={logo} alt="Ace Technology" />
          <p className="font-inter font-light text-cloud">
            High-end electronics and perpetual engineering. A division of Ace Group Private.
          </p>
          <p className="font-inter font-light text-navy">© 2026 Ace Technology. All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-montserrat font-semibold tracking-[0.25rem] text-cloud">ACE GROUP PRIVATE</h3>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Ace Living</a></li>
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Ace Auto</a></li>
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Ace Technology</a></li>
            <li><Link to="/aula-06" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Ace Watchmaking</Link></li>
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Bespoke & Vault</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-montserrat font-semibold tracking-[0.25rem] text-cloud">CLIENT SERVICES</h3>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Private Concierge</a></li>
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Calibration & Care</a></li>
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Certificate of Authenticity</a></li>
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Anti-Obsolescence Charter</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-montserrat font-semibold tracking-[0.25rem] text-cloud">LEGAL</h3>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Privacy Monograph</a></li>
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Terms of Patronage</a></li>
            <li><a href="#" className="font-inter font-light text-cloud no-underline tracking-[0.05em] transition-colors duration-300 hover:underline">Metrology Compliance</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

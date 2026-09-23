import { Link } from 'react-router-dom'
import { aulas } from '../aulas/aulas'

function Menu() {
  return (
    <div className="min-h-screen bg-cloud text-ink font-inter flex flex-col items-center gap-12 px-6 py-24">
      <header className="flex flex-col items-center gap-3 text-center">
        <h1 className="font-montserrat font-semibold tracking-[0.3rem] text-center">
          DESENVOLVIMENTO DE SISTEMAS WEB
        </h1>
        <p className="font-inter font-light text-navy">Escolha uma tarefa para visualizar.</p>
      </header>

      <ul className="list-none grid gap-6 sm:grid-cols-2 w-full max-w-3xl">
        {aulas.map((aula) => (
          <li key={aula.id}>
            <Link
              to={`/${aula.id}`}
              className="flex flex-col gap-3 border border-ink rounded-2xl p-6 no-underline text-ink transition-all duration-300 hover:bg-ink hover:text-cloud"
            >
              <span className="font-montserrat font-semibold tracking-[0.25rem]">{aula.title}</span>
              <span className="font-inter font-light text-sm">{aula.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu

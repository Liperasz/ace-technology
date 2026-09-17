import ListaHabilidades from '../components/ListaHabilidades'
import droid from '../assets/droid.png'

function Droid() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 px-6 md:px-8 py-16 md:py-32">
        <img src={droid} alt="Ace Droid" className="w-full max-w-[25rem] md:max-w-none md:w-[35rem] h-auto" />
        <div className="flex flex-col items-center gap-8 text-justify max-w-lg">
          <h1 className="font-montserrat font-semibold tracking-[0.5rem] text-3xl">ACE DROID</h1>
          <p className="font-inter font-normal">
            The Ace Droid is more than an assistant, it is a presence. A perfectly
            balanced sphere of titanium and light, engineered to move through your
            home as naturally as it moves through your routine.
          </p>
          <a
            href="#"
            className="inline-block bg-transparent text-navy border border-navy px-4 py-4 font-inter font-semibold text-sm tracking-[0.25rem] rounded-2xl no-underline transition-all duration-300 hover:bg-navy hover:text-cloud"
          >
            PURCHASE — $24,900
          </a>
        </div>
      </section>

      <section className="flex justify-center px-6 md:px-8 pb-24">
        {/* Componente reutilizado, mesma estrutura com dados diferentes */}
        <ListaHabilidades
          title="SPECIFICATIONS"
          items={[
            { label: 'Shell', value: 'Aerospace grade titanium with ceramic coating' },
            { label: 'Core', value: 'AceOS NPU, 12 core adaptive array' },
            { label: 'Mobility', value: 'Six axis magnetic levitation propulsion' },
            { label: 'Battery', value: '72 hour solid state cell, wireless charging' },
            { label: 'Sensors', value: '360° LiDAR mapping, emotion recognition' },
            { label: 'Weight', value: '2.3kg' },
          ]}
        />
      </section>
    </>
  )
}

export default Droid

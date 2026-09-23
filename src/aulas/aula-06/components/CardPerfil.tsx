// Define os dados que o componente espera receber via props
interface CardPerfilProps {
  name: string
  role: string
  description: string
  initials?: string
}

// Componente funcional reutilizável, recebe props e devolve JSX
function CardPerfil({ name, role, description, initials }: CardPerfilProps) {
  const avatarLetters = initials ?? name.slice(0, 2).toUpperCase()

  return (
    <div className="flex flex-col items-center gap-3 border border-ink rounded-2xl p-6 max-w-xs text-center bg-cloud">
      <div className="w-16 h-16 rounded-full bg-navy text-cloud flex items-center justify-center font-montserrat font-semibold">
        {avatarLetters}
      </div>
      <h3 className="font-montserrat font-semibold tracking-[0.1rem]">{name}</h3>
      <span className="text-xs tracking-[0.15em] text-navy">{role}</span>
      <p className="text-sm font-light">{description}</p>
    </div>
  )
}

export default CardPerfil

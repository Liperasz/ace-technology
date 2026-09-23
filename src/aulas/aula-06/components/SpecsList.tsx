// Cada item da lista tem um rótulo e um valor
interface Item {
  label: string
  value: string
}

interface SpecsListProps {
  title: string
  items: Item[]
}

// Componente reutilizável, usado nas specs de cada produto
function SpecsList({ title, items }: SpecsListProps) {
  return (
    <div className="max-w-[25rem]">
      <h2 className="font-montserrat font-semibold tracking-[0.25rem] mb-4">{title}</h2>
      <ul className="list-none flex flex-col gap-3 font-inter font-normal">
        {items.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpecsList

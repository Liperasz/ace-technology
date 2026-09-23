import type { ReactElement } from 'react'
import Aula06 from './aula-06/App'

export interface Aula {
  id: string
  title: string
  description: string
  element: ReactElement
}

// Para adicionar uma nova tarefa: crie a pasta src/aulas/aula-XX e adicione um item aqui.
export const aulas: Aula[] = [
  {
    id: 'aula-06',
    title: 'Aula 06',
    description: 'Meu Primeiro App React: componentes, JSX e navegacao entre paginas.',
    element: <Aula06 />,
  },
]

import { useParams, Navigate } from 'react-router-dom'
import SpecsList from '../components/SpecsList'
import { products } from '../data/products'

// Mapa dos nomes de imagem pros arquivos dentro de src/assets
// import.meta.glob carrega todas as imagens da pasta de uma vez
const images = import.meta.glob('../assets/*.png', { eager: true, import: 'default' }) as Record<string, string>

function getImage(fileName: string) {
  const entry = Object.entries(images).find(([path]) => path.endsWith(fileName))
  return entry ? entry[1] : ''
}

// Uma única página pra Droid, AceBook e Ace Glasses
// O slug vem da URL e decide qual produto mostrar
function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 px-6 md:px-8 py-16 md:py-40">
        <img
          className="w-full max-w-[25rem] md:max-w-none md:w-[50rem] h-auto"
          src={getImage(product.image)}
          alt={product.title}
        />
        <div className="flex flex-col items-center gap-8 text-justify p-0 md:px-8 md:py-4">
          <h1 className="font-montserrat font-semibold tracking-[0.75rem]">{product.title}</h1>
          <p className="font-inter font-normal">{product.heroDescription}</p>
          <a
            href="#"
            className="inline-block bg-transparent text-navy border border-navy px-4 py-5 font-inter font-semibold text-sm tracking-[0.25rem] rounded-2xl no-underline cursor-pointer transition-all duration-300 hover:bg-navy hover:text-cloud"
          >
            PURCHASE
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left gap-12 md:gap-20 px-6 md:px-8 pt-4 md:pt-8 pb-16 md:pb-24">
        <div className="max-w-[30rem]">
          <span className="block font-montserrat font-semibold text-2xl tracking-[0.1rem] text-navy">
            {product.price}
          </span>
          <p className="font-inter font-normal text-justify mt-4">{product.priceDescription}</p>
        </div>

        <SpecsList title="SPECIFICATIONS" items={product.specs} />
      </div>
    </>
  )
}

export default ProductPage

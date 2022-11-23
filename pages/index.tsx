import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SEO from '../src/components/commons/SEO'

const Home: NextPage = () => {
  return (
    <>
      <SEO headTitle='Pinho Bravo' />
      <div className='h-100v bg-top-img bg-cover bg-center img-top'>
        <div className='container mx-auto px-10 py-4'>
          <div className='flex justify-between'>
            <h3>Pinho Bravo</h3>
            <span>Menu</span>
          </div>
          <div className="h-100v flex flex-col justify-center gap-10">
            <h1 className='text-5xl font-sans font-bold tracking-wide text-white text-center'>Conforto e Qualidade em Campos do Jordão</h1>
            <button type='button' className='text-xl font-semibold text-white mx-5 px-7 py-4 bg-orange-400'>
              Mais Informações
            </button>
          </div>
        </div>
      </div>
      <article className="h-100v bg-bg-article px-10 text-color-text">
        <div className="container mx-auto flex flex-col justify-evenly h-full">
          <Image src='/imgs/house1.jpg' width={190} height={190} alt="Imagem da pousada" className='mx-auto rounded'/>
          <h1 className='text-3xl text-center font-serif uppercase font-bold'>Seu refugído em campos do jordão</h1>
          <div className='text-base indent-6 font-light'>
            <p>
              Os chalés pinho bravo são o melhor lugar para você fugir da correria da cidade grande. Um lugar tranquilo e aconchegante para você  e sua familia passarem os melhores dias na cidade.
            </p>
            <p>
              Com 12 chalés a disposição, ocupando uma aréa de Xm² em uma região tranquila da cidade e proporcionando um bom contato com a natureza.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Home

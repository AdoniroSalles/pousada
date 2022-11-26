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
            <a href='#info' type='button' className='text-center text-xl font-semibold text-white mx-5 px-7 py-4 bg-orange-400'>
              Mais Informações
            </a>
          </div>
        </div>
      </div>
      <article id='info' className="h-100v bg-bg-article px-10 text-color-text ">
        <div className="container mx-auto flex flex-col justify-evenly h-full">
          <Image src='/imgs/house1.jpg' width={200} height={200} alt="Imagem da pousada" className='mx-auto rounded' />
          <h1 className='text-3xl text-center font-serif uppercase font-bold'>Seu refugído em campos do jordão</h1>
          <div className='text-lg indent-6 font-light'>
            <p>
              Os chalés pinho bravo são o melhor lugar para você fugir da correria da cidade grande. Um lugar tranquilo e aconchegante para você  e sua familia passarem os melhores dias na cidade.
            </p>
            <p>
              Com 12 chalés a disposição, ocupando uma aréa de Xm² em uma região tranquila da cidade e proporcionando um bom contato com a natureza.
            </p>
          </div>
        </div>
      </article>
      <article className='h-100v'>
        <div className="container mx-auto text-color-text px-10 flex flex-col justify-around h-full">
          <div className="">
            <div className='h-1  bg-gradient-to-r from-orange-500' />
            <h1 className='text-reserva text-3xl text-center font-serif uppercase font-bold my-3'>Faça sua Reserva</h1>
            <div className='h-1 bg-gradient-to-l from-orange-500' />
          </div>
          <div>
            <Image className='mx-auto' src="/svg/wifi.svg" alt="Montain" width={100} height={100} />
            <p className='text-lg indent-6 font-light text-center'>
              Wi-fi gratuito para você fica conectado sem nenhum problema
            </p>
          </div>
          <div>
            <Image className='mx-auto' src="/svg/person.svg" alt="Montain" width={100} height={100} />
            <p className='text-lg indent-6 font-light text-center'>
              Tenha contato direto com a natureza e aproveite a tranquilidade e socego que só a natureza oferece
            </p>
          </div>
          <div>
            <Image className='mx-auto' src="/svg/coffe.svg" alt="Montain" width={100} height={100} />
            <p className='text-lg indent-6 font-light text-center'>
              Café da manhã inlcuso, receba o café da manhã em seu chalé e aproveito todo o conforto
            </p>
          </div>
        </div>
      </article>
      <article className='h-100v bg-bg-galery'>
        <div className="container mx-auto px-10 py-10">
          <h1 className='text-white text-3xl font-serif uppercase text-center'>Galeria</h1>
          <p className='text-xl text-white text-center font-serif my-5 '>
            Conheça um pouco dos nossos chalés, veja um pouco do nosso ambiente
          </p>
          <div className="relative overflow-auto">
            <div className="flex overflow-x-auto gap-5 snap-x ">
              <Image src="/imgs/galery/galery1.jpg" width={300} height={400} alt="Galery1" />
              <Image src="/imgs/galery/galery2.jpg" width={400} height={400} alt="Galery1" />
              <Image src="/imgs/galery/galery1.jpg" width={300} height={400} alt="Galery1" />
              <Image src="/imgs/galery/galery2.jpg" width={400} height={400} alt="Galery1" />
            </div>

          </div>
        </div>
      </article>
    </>
  )
}

export default Home

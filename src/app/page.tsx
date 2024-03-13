'use client';


import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { ToastContainer, toast } from 'react-toastify';

import { FaBook, FaBrain, FaCode, FaCopy, FaFont, FaImage, FaMusic, FaVideo } from "react-icons/fa";

import LogoImg from '../../public/images/logo.png';
import { ParticlesContainer } from '@/components/particles';
import { Card } from '@/components/card';
import { Carousel } from 'primereact/carousel';



export default function HomePage() {

  const [shortLink, setShortLink] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const shortLinkRef = useRef<HTMLInputElement>(null);

  const fetchShortLink = async (link: any) => {
    const response = await fetch('/api/short', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: link })
    });

    const shortLink = await response.json();

    setShortLink(shortLink.link);
  }

  const copyToClipboard = (text: string) => {
    window.navigator.clipboard.writeText(text);
    notify('Link copiado para a área de transferência');
  }

  const notify = (message: string) => {
    toast.info(message);
  }

  useEffect(() => {
    if (!shortLinkRef.current) return
    shortLinkRef.current.value = shortLink ?? ''
  }, [shortLink])

  return (
    <>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme='dark'
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="w-full h-full px-36 py-4">
        <header className='w-full flex justify-between'>
          <Image
            src={LogoImg}
            alt='logo'
            width={200}
            height={20}
          />
          <button className='bg-slate-200 border-[1px] border-slate-200 border-opacity-30 text-sm font-semibold bg-opacity-10 px-4 py-2 rounded-lg pointer-events-none'>Acessar</button>
        </header>
        <ParticlesContainer />
        <section className='w-full h-3/5 my-16'>
          <div className='w-1/2'>
            <h1 className='text-6xl font-bold mb-4'>Seu kit de ferramentas com o poder da IA</h1>
            <p className='text-2xl text-primary-300'>Encontre as melhores soluções de geração de vídeo, fotos, texto, músicas e muito mais...</p>
          </div>
          <div className='w-full mt-12'>

            <h2>Em breve, com Geno você poderá:</h2>

            <Carousel
              className='w-full mt-8'
              value={[
                {'title': 'Redigir Textos', 'content': 'Precisa de uma descrição, email, ou qualquer texto rápido? Com apenas um prompt, gere textos com até 1000 palavras.', icon: FaFont, tint: 'violet'},
                {'title': 'Gerar Imagens', 'content': 'Com Geno você poderá gerar imagens de forma automática, com base em um tema ou palavra-chave.', icon: FaImage, tint: 'pink'},
                {'title': 'Criar Vídeos', 'content': 'Utilize de prompts descritivos para gerar vídeos através da Inteligência Artificial, de forma fácil e intuitiva.', icon: FaVideo, tint: 'orange'},
                {'title': 'Compor Músicas', 'content': 'Com Geno você poderá compor incríveis melodias, basta dizer o estilo, o tempo e deixar a magia acontecer.', icon: FaMusic, tint: 'emerald'},
                {'title': 'Programar', 'content': 'Craindo um site ou software simples? o geno te ajuda com os melhores snippets de código para alavancar seu desenvolvimento.', icon: FaCode, tint: 'green'},
                {'title': 'Estudar', 'content': 'Dê ao geno o seu material de estudo e deixe com ele a tarefa de te ensinar através de uma conversa simples e agradável.', icon: FaBook, tint: 'purple'},
                {'title': 'Treinar', 'content': 'Treine sua conversação através de textos e áudios, gerados por inteligência artificial.', icon: FaBrain, tint: 'indigo'},
              ]}
              numVisible={4}
              numScroll={1}
              responsiveOptions={[
                {
                  breakpoint: '1024px',
                  numVisible: 3,
                  numScroll: 1
                },
                {
                  breakpoint: '768px',
                  numVisible: 2,
                  numScroll: 1
                },
                {
                  breakpoint: '560px',
                  numVisible: 1,
                  numScroll: 1
                }
              ]}
              itemTemplate={(item) => (
                <Card
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  tint={item.tint}
                />
              )}
            />
          </div>
          <div className='w-full mt-12'>
            <h2 className='w-fit mx-auto mt-16 mb-4'>Como funciona?</h2>
            <div className='w-full mt-8'>
              <div className='flex justify-between gap-8'>
                <div className="text-4xl text-right h-32 w-2/5">
                  <div className='rounded-full bg-indigo-700 border-2 border-indigo-700 bg-opacity-40 border-opacity-60 w-12 h-12 grid place-items-center ml-auto'>1</div>
                  </div>
                  <div className="text-left w-3/5">
                    <h3 className='text-2xl font-bold'>Escolha o que você quer gerar</h3>
                    <p className='text-lg text-primary-300'>Escolha entre texto, imagem, vídeo, música, código ou estudo.</p>
                  </div>
              </div>
              <div className='flex justify-between gap-8'>
                <div className="text-4xl text-right h-32 w-2/5">
                  <div className='rounded-full bg-indigo-700 border-2 border-indigo-700 bg-opacity-40 border-opacity-60 w-12 h-12 grid place-items-center ml-auto'>2</div>
                  </div>
                  <div className="text-left w-3/5">
                    <h3 className='text-2xl font-bold'>Insira o prompt</h3>
                    <p className='text-lg text-primary-300'>Insira um prompt, ou seja, uma frase ou palavra-chave que descreva o que você quer gerar.</p>
                  </div>
              </div>
              <div className='flex justify-between gap-8'>
                <div className="text-4xl text-right h-32 w-2/5">
                  <div className='rounded-full bg-indigo-700 border-2 border-indigo-700 bg-opacity-40 border-opacity-60 w-12 h-12 grid place-items-center ml-auto'>3</div>
                  </div>
                  <div className="text-left w-3/5">
                    <h3 className='text-2xl font-bold'>Escolha o modelo</h3>
                    <p className='text-lg text-primary-300'>Escolha um modelo de inteligência artificial para gerar o conteúdo.</p>
                  </div>
              </div>
              <div className='flex justify-between gap-8'>
                <div className="text-4xl text-right h-32 w-2/5">
                  <div className='rounded-full bg-indigo-700 border-2 border-indigo-700 bg-opacity-40 border-opacity-60 w-12 h-12 grid place-items-center ml-auto'>4</div>
                  </div>
                  <div className="text-left w-3/5">
                    <h3 className='text-2xl font-bold'>Gere o conteúdo</h3>
                    <p className='text-lg text-primary-300'>Clique em gerar e aguarde o resultado.</p>
                  </div>
              </div>
            </div>
          </div>
          <hr className='w-full border-[1px] h-0 border-primary-400' />
          <div className='w-full mt-8 mb-12'>
            <h2 className='w-fit mx-auto mt-16 mb-4'>Em breve...</h2>
            <p className='text-xl text-primary-300 text-center'>Por enquanto, o Geno AI Toolkit está em construção, mas enquanto espera, que tal utilizar nosso serviço de encurtamento de links?</p>
          </div>
          <div className='mb-12 flex gap-4'>
            <input
              type="text"
              placeholder='Digite o link aqui'
              className='w-full h-12 bg-slate-200 border-[1px] border-slate-200 border-opacity-60 text-sm font-semibold bg-opacity-20 px-4 py-2 rounded-lg'
              ref={inputRef}
            />
            <button
              onClick={() => {
                fetchShortLink(inputRef.current?.value || '');
              }}
              className='bg-slate-200 border-[1px] border-slate-200 border-opacity-60 text-sm font-semibold bg-opacity-20 px-4 py-2 rounded-lg'
            >Encurtar</button>
          </div>
          <div className='w-full h-12 bg-slate-200 border-[1px] flex justify-between border-slate-200 border-opacity-60 text-sm font-semibold font-mono bg-opacity-20 pl-4 pr-1 py-1 rounded-lg'>
            <input
              type="text"
              disabled
              placeholder='Link encurtado...'
              className='border-none bg-transparent p-0 w-full'
              ref={shortLinkRef}
            />
            <button
              onClick={() => copyToClipboard(shortLinkRef.current?.value || '')}
              className='bg-transparent border-[1px] flex border-slate-200 border-opacity-60 text-sm font-semibold px-4 py-2 rounded-lg'
            >
              Copiar
              <FaCopy className='ml-2' />
            </button>

          </div>
        </section>

      </main>
      <footer>
        <div className='w-full h-16 bg-slate-200 border-t-[1px] border-slate-200 border-opacity-30 text-sm font-semibold bg-opacity-10 px-4 py-2 rounded-lg translate-y-[1500%]'>
          <p className='text-primary-300 text-center'>© 2024 Geno AI Toolkit</p>
        </div>
      </footer>
    </>
  );
}

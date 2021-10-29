import type { NextPage } from 'next'
import React from 'react'
import Engine, { Operator } from '../core/Engine';
import Canvas2D from '../component/Canvas2D/Canvas2D';
import Link from 'next/link';

const Home: NextPage = () => {
  const [engine, setEngine] = React.useState<Operator>();

  const handleContextReady = (ctx2d: CanvasRenderingContext2D) => {
    setEngine(Engine(ctx2d));
  }
  return (
    <div className='relative'>
      <div className='relative min-h-screen flex flex-col justify-center items-center'>
        <div className='block sm:hidden text-1xl' style={{ fontFamily: 'Atari Classic Int' }}>Blaster!</div>
        <div className='block sm:hidden text-sm italic text-gray-400'> Whoa! That's small. Desktops only, Sorry.</div>
        <div className='hidden sm:block flex flex-col'>
          <div className='text-center text-5xl' style={{ fontFamily: 'Atari Classic Int' }}>Blaster!</div>
          <Canvas2D onContextReady={handleContextReady} width={600} height={600} />
        </div>
      </div>
      <div className='absolute hidden bottom-4 left-4 lg:block text-xs text-center max-w-xs md:bg-none hover:bg-gray-200 p-2 rounded-lg hover:shadow-lg hover:border-xl' style={{ fontFamily: 'Atari Classic Int' }}><Link href='https://blaster-fizzog.vercel.app'><a target='_blank'>Check out the working Blaster! here</a></Link></div>
      <Link href={`https://fizzog.io`}>
        <a className='absolute bottom-4 right-4 flex' target='_blank'>
          <img src='/Vector logo - No Background.svg' alt='logo' className='bg-white bg-opacity-30 md:bg-none h-20 hover:bg-gray-200 p-2 rounded-lg hover:shadow-lg hover:border-xl' />
        </a>
      </Link>
    </div>
  )
}

export default Home

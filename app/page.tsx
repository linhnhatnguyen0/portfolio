import Image from 'next/image'
import Header from './ui/header'

export default function Home() {
  return (
    <>
    <Header/>
    <main>
    <div className='h-screen w-screen flex flex-col justify-center items-center text-[120px] font-semibold'>
      <h1 className='text-center flex'>FRONT-END DEVELOPPER</h1>
      <h1 className='text-center flex'>NHAT LINH NGUYEN</h1>
    </div>
    </main>
    </>
  )
}

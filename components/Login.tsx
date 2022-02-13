import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className='bg-black relative text-white'>
      <div className='flex flex-col absolute h-5/6 z-50 w-full items-center justify-center space-y-4'>
        <button className='bg-yellow-500 rounded-lg font-bold animate-pulse px-5 py-3'
        onClick={() => authenticate()}>Login</button>
      </div>

      <div className='w-full h-screen'>
        <Image layout='fill' objectFit='cover' src="https://imageio.forbes.com/specials-images/imageserve/60cffcc3124caf8db0e2fece/0x0.jpg?format=jpg&width=1200&fit=bounds"/>
      </div>
      

    </div>
  )
}

export default Login
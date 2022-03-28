import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

function Login() {
  const { authenticate} = useMoralis();

  return (
    <div className='bg-black relative text-white'>
      <div className='flex flex-col absolute h-5/6 z-50 w-full items-center justify-center space-y-4'>
        <div className='w-[225px] text-4xl mb-5 border-l-2 border-white px-2'>
          Crypto News <br /> <span className='text-6xl font-bold'>CHAT</span> 
        </div>
        <Image 
          height={200}
          width={200}
          className='object-cover rounded-full'
          src="/profile-image.jpeg"/>
        <button 
          className='bg-[#EF972C] rounded-lg animate-pulse px-5 py-3 text-white'
          onClick={() => authenticate()}>         
          Login with MetaMask
          <FontAwesomeIcon className='ml-2' icon={faRightToBracket} />
        </button>
      </div>

      <div className='w-full h-screen'>
        <Image layout='fill' objectFit='cover' src="/background.jpg"/>
      </div>
      

    </div>
  )
}

export default Login
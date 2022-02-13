import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className='bg-black relative text-white'>
      <div className='flex flex-col absolute h-5/6 z-50 w-full items-center justify-center space-y-4'>
        <Image 
          height={200}
          width={200}
          className='object-cover rounded-full'
          src="/profile-image.jpeg"/>
        <button 
          className='bg-yellow-500 rounded-lg font-bold animate-pulse px-5 py-3'
          onClick={() => authenticate()}>         
          Login with MetaMask
          <FontAwesomeIcon className='ml-2' icon={faRightToBracket} />
        </button>
      </div>

      <div className='w-full h-screen'>
        <Image layout='fill' objectFit='cover' src="/background-1.jpg"/>
      </div>
      

    </div>
  )
}

export default Login
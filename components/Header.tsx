import React from 'react'
import { useMoralis } from 'react-moralis'
import Image from 'next/image'
import Avatar from './Avatar';

export default function Header() {
    const { user } = useMoralis();

    return (
        <div>
            <div className=''>
                <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
                    <Image 
                        height={200}
                        width={200}
                        className='object-cover rounded-full'
                        src="/profile-image.jpeg"/>
                </div>

                <div className='relative h-48 w-48 mx-auto border-pink-500 border-4 rounded-full'>
                    <Avatar username="" logoutOnPress=""/>
                </div>

                <h1 className='text-3xl mx-auto text-center text-pink-500 mt-4'>
                    Welcome to the Crypto News chat
                </h1>


            </div>
        </div>
    )
}

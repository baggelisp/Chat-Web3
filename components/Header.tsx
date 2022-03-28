import React from 'react'
import { useMoralis } from 'react-moralis'
import Image from 'next/image'
import Avatar from './Avatar';

export default function Header() {
    const { user, logout } = useMoralis();

    return (
        <div className='sticky top-0 p-5 z-50 bg-black shadow-sm
        border-b-2 border-pink-700'>
            <div className=''>
                <div className='justify-end	flex'>
                    <button onClick={logout} className='p-2 bg-pink-500 rounded-lg'>LOGOUT</button>
                </div>
                <div className='relative h-28 w-28 mx-auto border-pink-500 border-4 rounded-full'>
                    <Avatar username={user?.get('username')} logoutOnPress="false"/>
                </div>

                <h1 className='text-3xl mx-auto text-center text-pink-500 mt-4'>
                    Welcome to Greek Cryptocurrency Community
                </h1>

                <h2 className='text-1xl mx-auto text-center text-pink-500 mt-2'>
                    Your Address: {user?.get('username')}
                </h2>
            </div>
        </div>
    )
}

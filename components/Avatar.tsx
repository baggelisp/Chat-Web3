import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis'

export default function Avatar( {username , logoutOnPress} : {username:any , logoutOnPress: any}) {

    const { user, logout } = useMoralis();

    return (
        <Image
        className='rounded-full bg-black cursor-pointer hover:opacity-75'
        src={`https://avatars.dicebear.com/api/identicon/${username || user?.get('username')}.svg`}
        layout='fill'
        onClick={()=> logoutOnPress && logout()}
        
        />
    )
}

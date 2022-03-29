import React from 'react'
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import TimeAgo from 'timeago-react'


type AppProps = {
    message: any
}
function Message({ message }: AppProps) {
    const { user } = useMoralis();
    const isUserMessage = message.get('ethAddress') === user?.get("ethAddress")

    return (
        <div className={`flex items-end space-x-2 relative 
            ${isUserMessage && "justify-end" }
        `}>
            <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2' }`}>
                <Avatar username={user?.getUsername()} logoutOnPress='false'/>
            </div>
            <div className={`flex space-x-4 px-3 p-3 rounded-lg 
                ${isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-bl-none bg-blue-400' }
                `}
            >
                <p>{message.get('message')}</p>

                
            </div>

            <TimeAgo
                className={`text-[10px] italic text-gray-400
                ${isUserMessage && 'order-first pr-1' }
                `}
                
                datetime={message.createdAt}/>

            <p className={`absolute -bottom-5 text-xs ${isUserMessage ? 'text-pink-300' : 'text-blue-400'}` }>
                {message.get('ethAddress')}
            </p>
        </div>
    )
}

export default Message
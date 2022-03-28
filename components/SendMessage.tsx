import React, { useState } from 'react'
import { useMoralis } from 'react-moralis';
type AppProps = {
    endOfMessagesRef: any;
}

function SendMessage( { endOfMessagesRef }: AppProps) {
    const { user, Moralis } = useMoralis();
    const [message , setMessage] = useState("")

    const sendMessage = (e: any) => {
        e.preventDefault();
        if (!message) return;
        const Messages = Moralis.Object.extend("Messages")
        const messages = new Messages();

        messages.save({
            message: message,
            username: user?.getUsername(),
            ethAddress: user?.get('ethAddress')
        }).then( 
            (message: any) => {
                endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
                setMessage("");

            },
            (error: any) => {
                alert('Error sending message. Please try again.')
            },
        );


    }
    return (
        <form className='flex w-11/12 fixed bottom-10 bg-black opacity-80
        px-6  py-4 max-w-2xl shadow-xl rounded-full border-2 
        border-blue-400'>
            <input className='flex-grow outline-none bg-transparent 
                text-white placeholder-gray-500
                pr-5' 
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Enter a message...'/>
            <button
                type="submit"
                onClick={sendMessage}
                className='font-bold text-pink-500'
                >Send</button>

        </form>
    )
}

export default SendMessage
import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';


export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login/>

  return (
    <div className="h-screen">
      <Head>
        <title>Web 3 chat</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@500;700;900&display=swap" rel="stylesheet"/>
      </Head>

      <div> Welcome </div>
      <button onClick={()=> logout()}>Logout </button>
      
    </div>
  )
}

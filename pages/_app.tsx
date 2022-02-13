import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

declare var process : {
  env: {
    NEXT_PUBLIC_APP_ID: string,
    NEXT_PUBLIC_SERVER_URL: string,
  }
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider 
    appId={process.env.NEXT_PUBLIC_APP_ID} 
    serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp

import '../styles/globals.css'
import Header from '../components/shared/header/header'
import { Box } from 'rebass'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
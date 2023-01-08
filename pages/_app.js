import 'bootstrap/scss/bootstrap.scss'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])
  
  return (
    <Component {...pageProps} />
  )
}

import '../styles/globals.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ApolloProvider } from "@apollo/client/react"
import { client } from "../lib/api"
import Loader from '../components/loader';

library.add(fab, fas)

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Loader/>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp

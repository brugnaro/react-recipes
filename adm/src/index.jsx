import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './App'

const client = new ApolloClient({ uri: 'http://localhost:4444/graphql' })

const root = document.getElementById('root')
const load = () => render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
), root)

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load)
}

load()

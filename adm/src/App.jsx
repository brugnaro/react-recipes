import { Query } from 'react-apollo'
import { GET_ALL_RECIPES } from './queries'

const App = () => <div>
  <Query query={GET_ALL_RECIPES}>
    {({ data, loading, error }) => {
      if (loading) return <p>loading</p>
      if (error) return <p>Error</p>
      const recipes = data.getAllRecipes
      return (
        recipes.map((re, i) => <p key={i}>{re.name}</p>)
      )
    }}
  </Query>
</div>

export default App

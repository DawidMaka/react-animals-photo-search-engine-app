import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Photos from 'pages/Photos'

const queryClient = new QueryClient()

const Root = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/photos/:query/:id?"
          component={Photos}
        />
      </Switch>
    </BrowserRouter>
  </QueryClientProvider>
)

export default Root

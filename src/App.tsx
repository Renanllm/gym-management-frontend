import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router'
import { Background } from './components/Background'
import { router } from './router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Background>
        <RouterProvider router={router} />
      </Background>
    </QueryClientProvider>
  )
}

export default App

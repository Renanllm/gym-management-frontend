import { QueryClient, QueryClientProvider } from 'react-query'
import { StudentsList } from './components/StudentsList'

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
      <StudentsList />
    </QueryClientProvider>
  )
}

export default App

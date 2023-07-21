import { createBrowserRouter } from 'react-router-dom'
import { StudentsList } from './pages/StudentsList'
import ErrorPage from './pages/ErrorPage'
import { StudentForm } from './pages/StudentForm'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StudentsList />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/new-student',
    element: <StudentForm />,
  },
])

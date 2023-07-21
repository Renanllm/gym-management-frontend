import { useQuery } from 'react-query'
import { client } from '../../client/axios'
import { useNavigate } from 'react-router'

type Student = {
  id: string
  name: string
  cpf: string
  address: string
  birthDate: string
  created_at: string
}

type AllStudentsResponse = {
  students: Student[]
}

export const StudentsList = () => {
  const navigate = useNavigate()

  const {
    isLoading,
    error,
    data: students = [],
  } = useQuery('all-students', async () => {
    return await client
      .get('/students')
      .then((res) => res.data as AllStudentsResponse)
      .then((data) => data.students)
      .catch((err) => console.log(err))
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>An error has occurred!</h1>
  }

  return (
    <>
      <div className="mb-4 w-full relative space-y-4 flex justify-end">
        <button
          className="p-2 rounded-lg bg-purple-500 text-white"
          onClick={() => navigate('/new-student')}
        >
          New Student
        </button>
      </div>
      <div className="relative space-y-4">
        {students.map((student: Student) => (
          <div
            key={student.id}
            className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
          >
            <div className="flex-1 flex justify-between items-center">
              <div>
                <p>{student.name}</p>
              </div>

              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-purple-300 text-white">
                  Update
                </button>
                <button className="p-2 rounded-lg bg-purple-300 text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

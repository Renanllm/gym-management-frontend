import { useQuery } from 'react-query'
import { client } from '../../client/axios'

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
    <div className="container h-screen flex flex-col gap-4 items-center justify-center">
      {students.map((student: Student) => (
        <div key={student.id} className="w-full p-6 grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <p>{student.name}</p>
            <p>{student.cpf}</p>
            <p>{student.birthDate}</p>
            <p>{student.address}</p>
          </div>

          <div className="col-span-4">
            <button className="bg-red-500 text-white rounded px-4 py-2 mr-4">
              Delete
            </button>
            <button className="bg-sky-500 text-white rounded px-4 py-2">
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

import { client } from './client/axios'

function App() {
  const handleClick = () => {
    client
      .get('/students')
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <div className="container h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold color text-slate-50">
        Hello from AWS S3 instance!
      </h1>
      <button className="bg-indigo-500 p-2 rounded-sm" onClick={handleClick}>
        Call API
      </button>
    </div>
  )
}

export default App

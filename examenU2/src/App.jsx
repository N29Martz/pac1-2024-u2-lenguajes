import Header from './components/Header'
import Form from './components/Form'

function App() {

  return (
    <>
      <div className="bg-gray-100 h-screen text-white pt-10">
        <div className="container mx-auto mt-6">
          <Header />
          <div className="justify-center md:flex mt-10">
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import Navbar from './layouts/Navbar'


function App() {

  return (
    <div className="h-screen grid grid-cols-[auto_1fr] grid-rows-[1fr_75px] bg-primary-dark gap-2 p-2">
      <Navbar />
      <div>2</div>
      <div className="col-span-2">3</div>
    </div>
  )
}

export default App

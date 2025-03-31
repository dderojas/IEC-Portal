import { Home, PerDiemForm, TravelExpenseForm } from './views'
import { useView } from "./context/ViewContext"
import { Navbar } from './components/Navbar'

const App = () => {
  const { view } = useView()

  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      {view === 'home' && <Home />}
      {view === 'perDiemForm' && <PerDiemForm />}
      {view === 'travelExpenseForm' && <TravelExpenseForm />}
    </div>
  )
}

export default App

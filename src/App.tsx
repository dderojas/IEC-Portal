//@ts-nocheck
import { Home, PerDiemForm, TravelExpenseForm } from './views'
import { useView } from "./context/ViewContext"
import { Navbar } from './components/Navbar'

const App = () => {
  const { view } = useView()

  return (
    <>
      <Navbar />
      {view === 'home' && <Home />}
      {view === 'perDiemForm' && <PerDiemForm />}
      {view === 'travelExpenseForm' && <TravelExpenseForm />}
    </>
  )
}

export default App

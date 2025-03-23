import { useState } from "react"
import { Home, PerDiemForm, TravelExpenseForm } from '../components'

const App = () => {
  const [view, setView] = useState('home')

  return (
    <>
      <nav className='flex justify-around'>
        <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md" onClick={() => setView('home')}>Home</div>
        <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md" onClick={() => setView('perDiemForm')}>Per Diem</div>
        <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md" onClick={() => setView('travelExpenseForm')}>Travel Claim</div>
        <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md">PDF Docs</div>
      </nav>
      {view === 'home' && <Home />}
      {view === 'perDiemForm' && <PerDiemForm />}
      {view === 'travelExpenseForm' && <TravelExpenseForm />}
    </>
  )
}

export default App

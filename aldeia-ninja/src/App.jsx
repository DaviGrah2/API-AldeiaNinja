import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ListaNinjas from './components/ListaNinjas'
import Rodape from './components/Rodape'
import FormularioNinja from './components/FormularioNinja'
import StatusAldeia from './components/StatusAldeia'
import { ninjasIniciais } from './dados/ninjas'
function App() {
  const [ninjas, setNinjas] = useState(ninjasIniciais)
  const [busca, setBusca] = useState("")

  const removerNinja = (id) => {
    setNinjas(ninjas.filter(ninja => ninja.id !== id))
  }

  const addNinja = (novoNinja) => {
    setNinjas([...ninjas, { ...novoNinja, id: ninjas.length + 1 }])
  }

  const ninjasFilterados = ninjas.filter(ninja => 
    ninja.nome.toLowerCase().includes(busca.toLowerCase())
  )
  return (
    <div>
      <Header />
      <StatusAldeia total={ninjas.length} />
      <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar ninja..." />
      <FormularioNinja onAddNinja={addNinja} />
      <ListaNinjas ninjas={ninjasFilterados} onRemover={removerNinja} />
      <Rodape />
    </div>
  )
}
export default App

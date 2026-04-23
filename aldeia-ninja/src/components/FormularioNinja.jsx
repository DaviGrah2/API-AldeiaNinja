import { useState } from 'react'

export default function FormularioNinja({ onAddNinja }) {
  const [nome, setNome] = useState('')
  const [rank, setRank] = useState('')
  const [jutsu, setJutsu] = useState('')
  const [missao, setMissao] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const novoNinja = { nome, rank, jutsu, missao }
    console.log(novoNinja)
    onAddNinja(novoNinja)
    setNome('')
    setRank('')
    setJutsu('')
    setMissao('')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
      <input value={rank} onChange={(e) => setRank(e.target.value)} placeholder="Rank" required />
      <input value={jutsu} onChange={(e) => setJutsu(e.target.value)} placeholder="Jutsu" required />
      <input value={missao} onChange={(e) => setMissao(e.target.value)} placeholder="Missão atual (opcional)" />
      <button type="submit">Recrutar Ninja</button>
    </form>
  )
}
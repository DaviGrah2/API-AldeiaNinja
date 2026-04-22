function CardNinja({ ninja, aldeaNatal, onRemover }) {
  return (
    <div>
      <h2>{ninja.nome}</h2>
      <p>Rank: {ninja.rank}</p>
      <p>Aldeia: {aldeaNatal}</p>
      <p>Jutsu: {ninja.jutsu}</p>
      <p>{ninja.missao ? `Missão: ${ninja.missao}` : 'Nenhuma missão ativa'}</p>
      <button onClick={() => onRemover(ninja.id)}>Expulsar da Vila</button>
    </div>
  )
}

export default CardNinja
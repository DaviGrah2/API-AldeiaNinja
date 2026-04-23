import CardNinja from './CardNinja'

function ListaNinjas({ ninjas, onRemover }) {
  return (
    <div className="lista">
      {ninjas.map(ninja => <CardNinja key={ninja.id} ninja={ninja} aldeaNatal="Konoha" onRemover={onRemover} />)}
    </div>
  )
}

export default ListaNinjas
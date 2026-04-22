import CardNinja from './CardNinja'

function ListaNinjas({ ninjas, onRemover }) {
  return (
    <div>
      {ninjas.map(ninja => <CardNinja key={ninja.id} ninja={ninja} aldeaNatal="Konoha" onRemover={onRemover} />)}
    </div>
  )
}

export default ListaNinjas
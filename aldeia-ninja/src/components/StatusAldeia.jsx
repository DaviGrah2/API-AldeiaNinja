export default function StatusAldeia({ total }) {
  if (total === 0) {
    return <p>A vila está vazia</p>
  } else if (total >= 1 && total <= 3) {
    return <p>Precisamos de mais ninjas</p>
  } else if (total >= 4 && total <= 7) {
    return <p>Time pronto para missões!</p>
  } else {
    return <p>Grande esquadrão em ação!</p>
  }
}